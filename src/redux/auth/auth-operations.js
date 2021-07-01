import axios from 'axios';
import actions from './auth-actions';

axios.defaults.baseURL = 'https://planning-app1.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  },
  unset() {
    axios.defaults.headers.common = { Authorization: '' };
  },
};

const register = userData => async dispatch => {
  dispatch(actions.registerRequest());
  try {
    const { data } = await axios.post('/registration', userData);
    token.set(data.data.token);
    dispatch(actions.registerSuccess(data.data));
  } catch (error) {
    dispatch(actions.registerError(error.message));
  }
};

const login = userData => async dispatch => {
  dispatch(actions.loginRequest());

  try {
    const { data } = await axios.post('/login', userData);
    token.set(data.data.token);
    dispatch(actions.loginSuccess(data.data));
  } catch (error) {
    dispatch(actions.loginError(error.message));
  }
};

const logout = () => async dispatch => {
  dispatch(actions.logoutRequest());
  try {
    await axios.post('/logout');
    token.unset();
    dispatch(actions.logoutSuccess());
  } catch (error) {
    dispatch(actions.logoutError(error.message));
  }
};

const getUserData = () => async (dispatch, getState) => {
  const {
    auth: { token: savedToken },
  } = getState();
  if (!savedToken) {
    return;
  } else {
    dispatch(actions.getCurrUserRequest());
    token.set(savedToken);
    try {
      const response = await axios.get('/');
      dispatch(actions.getCurrUserSuccess(response.data));
    } catch (error) {
      dispatch(actions.getCurrUserError(error.message));
    }
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  login,
  logout,
  getUserData,
};
