import { strings } from '../i18n';
import { apiFetch } from './api';

export const createError = code => ({
  error: true,
  response: {
    code,
    message: strings.netWorkError[code],
  },
});

export const isHttpError = ({ status }) => !!status && status >= 400 && status < 600;

export const Network = {
  isConnected() {
    throw new Error('isConnected method should be implemented');
  },
  async parseResponse(result) {
    const error = !result.ok;
    const code = result.status;
    const response = isHttpError(result) ? createError('FETCH_ISSUE') : await result.json();
    return result.ok
      ? {
          error,
          code,
          response,
        }
      : isHttpError(result)
      ? createError('FETCH_ISSUE')
      : createError('TECH_ISSUE');
  },
  withResponse(apiCall) {
    return new Promise(async resolve => {
      try {
        const response = await apiCall();
        const parsedResponse = await Network.parseResponse(response);
        resolve(parsedResponse);
      } catch (err) {
        resolve(createError('TECH_ISSUE'));
      }
    });
  },
  async withConnectivity(apiCall) {
    const isConnected = await Network.isConnected();
    return isConnected ? await Network.withResponse(apiCall) : createError('NO_INTERNET');
  },
  http: {
    get(url) {
      return Network.withConnectivity(apiFetch(url, 'GET'));
    },
    post(url) {
      return Network.withConnectivity(apiFetch(url, 'POST'));
    },
    put(url) {
      return Network.withConnectivity(apiFetch(url, 'PUT'));
    },
    delete(url) {
      return Network.withConnectivity(apiFetch(url, 'DELETE'));
    },
  },
};
