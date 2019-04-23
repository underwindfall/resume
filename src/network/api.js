const formatOptions = method => {
    return {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    };
};
export const apiFetch = (endPoint, method) => () => fetch(endPoint);
