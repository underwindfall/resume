const parseExperience = data => ({
    startTime: data.startYear,
    endTime: data.endYear,
    companyName: data.company,
    title: data.title,
    description: data.description
});

export const parseExperiences = data => {
    const { response, error } = data;
    const experiences =
        response.layer.work && response.layer.work.length > 0
            ? response.layer.work.map(experience =>
                  parseExperience(response.content[experience])
              )
            : response.layer.work;
    return {
        error,
        response: {
            experiences
        }
    };
};

const parseEducation = data => ({
    time: data.time,
    collegeName: data.college,
    title: data.title,
    description: data.description
});

export const parseEducations = data => {
    const { response, error } = data;
    const educations =
        response.layer.education && response.layer.education.length > 0
            ? response.layer.education.map(experience =>
                  parseEducation(response.content[experience])
              )
            : response.layer.education;

    return {
        error,
        response: {
            educations
        }
    };
};

const parseProject = data => ({
    title: data.title,
    clientIcon: data.client_ico,
    clientLink: data.client_link,
    description: data.description,
    techstack: ['Kotlin, RxKotlin, Redux, Mapbox, Realm'],
    projectLink: data.link
});

export const parseProjects = data => {
    const { response, error } = data;
    const projects =
        response.layer.project && response.layer.project.length > 0
            ? response.layer.project.map(experience =>
                  parseProject(response.content[experience])
              )
            : response.layer.project;

    return {
        error,
        response: {
            projects
        }
    };
};

export const parseSkills = data => {};

export const parseBlogData = data => keyword => {
    return data.layer[keyword] && data.layer[keyword].length > 0
        ? data.layer[keyword].map(experience =>
              parseExperience(data.content[experience])
          )
        : data.layer[keyword];
};
export const parseData = data => {
    const { response, error } = data;
    const experiences = parseBlogData(response)('work');
    const educations = parseBlogData(response)('education');
    const projects = parseBlogData(response)('project');
    const skills = parseBlogData(response)('skills');

    return {
        error,
        response: {
            experiences,
            educations,
            projects,
            skills
        }
    };
};
