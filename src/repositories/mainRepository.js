import { Network } from '../network/network';
import { endPoint } from '../network/endPoint';
import { parseExperiences } from '../parser/parser';

const getData = async parseFunction => {
    const result = await Network.http.get(endPoint);
    if (!result.error) {
        return parseFunction(result);
    }
    return result;
};

export const getExperiences = async () => {
    return await getData(parseExperiences);
};
