import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './auth-actions';

const userInitialState = { email: '' };
const user = createReducer(userInitialState, {
  [actions.registerSuccess]: (_, { payload }) => payload.user,
  [actions.loginSuccess]: (_, { payload }) => payload.user,
  [actions.logoutSuccess]: () => userInitialState,
  [actions.getCurrUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [actions.registerSuccess]: (_, { payload }) => payload.token,
  [actions.loginSuccess]: (_, { payload }) => payload.token,
  [actions.logoutSuccess]: () => null,
});

const errorCode = createReducer(null, {
  [actions.registerError]: (_, { payload }) => payload,
  [actions.registerSuccess]: () => 0,
  [actions.loginError]: (_, { payload }) => payload,
  [actions.loginSuccess]: () => 0,
  [actions.logoutError]: (_, { payload }) => payload,
  [actions.logoutSuccess]: () => 0,
  [actions.getCurrUserError]: (_, { payload }) => payload,
});

const isLogedIn = createReducer(false, {
  [actions.registerSuccess]: () => true,
  [actions.loginSuccess]: () => true,
  [actions.getCurrUserSuccess]: () => true,
  [actions.logoutSuccess]: () => false,
  [actions.registerError]: () => false,
  [actions.loginError]: () => false,
  [actions.getCurrUserError]: () => false,
});

export default combineReducers({
  user,
  isLogedIn,
  token,
  errorCode,
});
