const getIsAuthorized = state => state.auth.isLogedIn;

const getUserEmail = state => state.auth.user.email;

const getErrorCode = state => state.auth.errorCode;

// eslint-disable-next-line import/no-anonymous-default-export
export default { getIsAuthorized, getUserEmail, getErrorCode };
