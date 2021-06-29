const getIsLoading = state => state.projects.loading;
const getProjects = state => state.projects.projects;

// eslint-disable-next-line import/no-anonymous-default-export
export default { getIsLoading, getProjects };
