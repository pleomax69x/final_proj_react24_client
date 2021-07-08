const getIsAuthorized = state => state.auth.isLogedIn;

const getUserEmail = state => state.auth.user.email;

const getUserId = state => state.auth.user.id;

const getToken = state => state.auth.token;
// eslint-disable-next-line import/no-anonymous-default-export
export default { getIsAuthorized, getUserEmail, getUserId, getToken };
