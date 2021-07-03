const getProjects = state => state.projects.projects;

const getErrorMessage = state => state?.projects?.error.payload;

// eslint-disable-next-line import/no-anonymous-default-export
export default { getProjects, getErrorMessage };
