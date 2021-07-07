import { createAction } from '@reduxjs/toolkit';

const getPeopleRequest = createAction('sprints/getPeopleRequest');
const getPeopleSuccess = createAction('sprints/getPeopleSuccess');
const getPeopleError = createAction('sprints/getPeopleError');

const addPeopleRequest = createAction('sprints/addPeopleRequest');
const addPeopleSuccess = createAction('sprints/addPeopleSuccess');
const addPeopleError = createAction('sprints/addPeopleError');

const deletePeopleRequest = createAction('sprints/deletePeopleRequest');
const deletePeopleSuccess = createAction('sprints/deletePeopleSuccess');
const deletePeopleError = createAction('sprints/deletePeopleError');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getPeopleRequest,
  getPeopleSuccess,
  getPeopleError,
  addPeopleRequest,
  addPeopleSuccess,
  addPeopleError,
  deletePeopleRequest,
  deletePeopleSuccess,
  deletePeopleError,
};
