import { createReducer } from '@reduxjs/toolkit';
import { authActions } from '../auth';
import { projectsActions } from '../projects';
import { sprintsActions } from '../sprints';
import { tasksActions } from '../tasks';

const {
  registerRequest,
  registerError,
  loginRequest,
  loginError,
  logoutRequest,
  logoutError,
  getCurrUserRequest,
  getCurrUserError,
} = authActions;

const {
  getProjectsRequest,
  getProjectsError,
  addProjectRequest,
  addProjectError,
  deleteProjectRequest,
  deleteProjectError,
  editProjectRequest,
  editProjectError,
  addTeammateRequest,
  addTeammateError,
} = projectsActions;

const {
  getSprintsRequest,
  getSprintsError,
  addSprintRequest,
  addSprintError,
  deleteSprintRequest,
  deleteSprintError,
  editSprintRequest,
  editSprintError,
} = sprintsActions;

const {
  getTasksRequest,
  getTasksError,
  addTaskRequest,
  addTaskError,
  deleteTaskRequest,
  deleteTaskError,
  editTaskRequest,
  editTaskError,
  addTaskHoursRequest,
  addTaskHoursError,
} = tasksActions;

const error = createReducer(null, {
  [registerRequest]: () => null,
  [registerError]: (_, { payload }) => payload,
  [loginRequest]: () => null,
  [loginError]: (_, { payload }) => payload,
  [logoutRequest]: () => null,
  [logoutError]: (_, { payload }) => payload,
  [getCurrUserRequest]: () => null,
  [getCurrUserError]: (_, { payload }) => payload,
  [getProjectsRequest]: () => '',
  [getProjectsError]: (_, payload) => payload,
  [addProjectRequest]: () => '',
  [addProjectError]: (_, payload) => payload,
  [deleteProjectRequest]: () => '',
  [deleteProjectError]: (_, payload) => payload,
  [editProjectRequest]: () => '',
  [editProjectError]: (_, payload) => payload,
  [addTeammateRequest]: () => '',
  [addTeammateError]: (_, payload) => payload,
  [getSprintsRequest]: () => true,
  [getSprintsError]: (_, payload) => payload,
  [addSprintRequest]: () => '',
  [addSprintError]: (_, payload) => payload,
  [deleteSprintRequest]: () => '',
  [deleteSprintError]: (_, payload) => payload,
  [editSprintRequest]: () => '',
  [editSprintError]: (_, payload) => payload,
  [getTasksRequest]: () => '',
  [getTasksError]: (_, payload) => payload,
  [addTaskRequest]: () => '',
  [addTaskError]: (_, payload) => payload,
  [deleteTaskRequest]: () => '',
  [deleteTaskError]: (_, payload) => payload,
  [editTaskRequest]: () => '',
  [editTaskError]: (_, payload) => payload,
  [addTaskHoursRequest]: () => '',
  [addTaskHoursError]: (_, payload) => payload,
});

export default error;
