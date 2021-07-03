const getSprints = state => state.sprints.sprints;

const getErrorMessage = state => state?.projects?.error.payload;

// eslint-disable-next-line import/no-anonymous-default-export
export default { getSprints, getErrorMessage };
