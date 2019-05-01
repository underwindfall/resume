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
    time: data.year,
    collegeName: data.college,
    title: data.title,
    branch: data.branch,
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
    ...data,
    startTime: data.startYear,
    endTime: data.endYear,
    title: data.title,
    description: data.description,
    role: data.role,
    link: data.link,
    icon: data.client_ico,
    playerRole: data.playerRole
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
export const parseSkills = () => {};

const parseSkill = data => ({
    name: data.name,
    icon: data.icon
});
export const parseBlogData = data => keyword => genericParse => {
    return data.layer[keyword] && data.layer[keyword].length > 0
        ? data.layer[keyword].map(experience =>
              genericParse(data.content[experience])
          )
        : data.layer[keyword];
};
export const parseData = data => {
    const { response, error } = data;
    const experiences = parseBlogData(response)('work')(parseExperience);
    const educations = parseBlogData(response)('education')(parseEducation);
    const projects = parseBlogData(response)('project')(parseProject);

    return {
        error,
        response: {
            experiences,
            educations,
            projects,
            skills: {}
        }
    };
};
