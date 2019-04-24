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
