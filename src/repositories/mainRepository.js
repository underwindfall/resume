import { Network } from '../network/network';
import { endPoint } from '../network/endPoint';
import {
    parseData,
    parseExperiences,
    parseProjects,
    parseSkills
} from '../parser/parser';

export const getResumeData = async language => {
    const result = await Network.http.get(endPoint(language));
    if (!result.error) {
        return parseData(result);
    }
    return result;
};

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

export const getEducations = async () => {
    return await getData(parseExperiences);
};

export const getProjects = async () => {
    return await getData(parseProjects);
};

export const getSkills = async () => {
    return await getData(parseSkills);
};
