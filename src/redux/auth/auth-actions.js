import { createAction } from "@reduxjs/toolkit";

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction("auth/registerSuccess");
const registerError = createAction("auth/registerError");

const loginRequest = createAction("auth/logineRquest");
const loginSuccess = createAction("auth/loginSuccess");
const loginError = createAction("auth/loginError");

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction("auth/logoutSuccess");
const logoutError = createAction("auth/logoutError");

const getCurrUserRequest = createAction("auth/getCurrUserRequest");
const getCurrUserSuccess = createAction("auth/getCurrUserSuccess");
const getCurrUserError = createAction("auth/getCurrUserError");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrUserRequest,
  getCurrUserSuccess,
  getCurrUserError,
};