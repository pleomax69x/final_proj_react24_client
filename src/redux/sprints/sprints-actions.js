import { createAction } from '@reduxjs/toolkit';

const getSprintsRequest = createAction('sprints/getSprintsRequest');
const getSprintsSuccess = createAction('sprints/getSprintsSuccess');
const getSprintsError = createAction('sprints/getSprintsError');

const addSprintRequest = createAction('sprints/addSprinsRequest');
const addSprintSuccess = createAction('sprints/addSprinsSuccess');
const addSprintError = createAction('sprints/addSprinsError');

const deleteSprintRequest = createAction('sprints/deleteSprinsRequest');
const deleteSprintSuccess = createAction('sprints/deleteSprinsSuccess');
const deleteSprintError = createAction('sprints/deleteSprinsError');

const editSprintRequest = createAction('sprints/editSprinsRequest');
const editSprintSuccess = createAction('sprints/editSprinsSuccess');
const editSprintError = createAction('sprints/editSprinsError');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getSprintsRequest,
  getSprintsSuccess,
  getSprintsError,
  addSprintRequest,
  addSprintSuccess,
  addSprintError,
  deleteSprintRequest,
  deleteSprintSuccess,
  deleteSprintError,
  editSprintRequest,
  editSprintSuccess,
  editSprintError,
};
