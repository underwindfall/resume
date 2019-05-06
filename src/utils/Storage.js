const localStorage = window.localStorage;

const LANGUAGE_KEY = 'LANGUAGE_I18N';

export const setValue = value => localStorage.setItem(LANGUAGE_KEY, value);

export const getValue = () => localStorage.getItem(LANGUAGE_KEY);

export const removeValue = () => localStorage.removeItem(LANGUAGE_KEY);
