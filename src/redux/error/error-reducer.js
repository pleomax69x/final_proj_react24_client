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
  editScheduledHoursRequest,
  editScheduledHoursError,
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
  [getProjectsRequest]: () => null,
  [getProjectsError]: (_, { payload }) => payload,
  [addProjectRequest]: () => null,
  [addProjectError]: (_, { payload }) => payload,
  [deleteProjectRequest]: () => null,
  [deleteProjectError]: (_, { payload }) => payload,
  [editProjectRequest]: () => null,
  [editProjectError]: (_, { payload }) => payload,
  [addTeammateRequest]: () => null,
  [addTeammateError]: (_, { payload }) => payload,
  [getSprintsRequest]: () => null,
  [getSprintsError]: (_, { payload }) => payload,
  [addSprintRequest]: () => null,
  [addSprintError]: (_, { payload }) => payload,
  [deleteSprintRequest]: () => null,
  [deleteSprintError]: (_, { payload }) => payload,
  [editSprintRequest]: () => null,
  [editSprintError]: (_, { payload }) => payload,
  [getTasksRequest]: () => null,
  [getTasksError]: (_, { payload }) => payload,
  [addTaskRequest]: () => null,
  [addTaskError]: (_, { payload }) => payload,
  [deleteTaskRequest]: () => null,
  [deleteTaskError]: (_, { payload }) => payload,
  [editTaskRequest]: () => null,
  [editTaskError]: (_, { payload }) => payload,
  [addTaskHoursRequest]: () => null,
  [addTaskHoursError]: (_, { payload }) => payload,
  [editScheduledHoursRequest]: () => null,
  [editScheduledHoursError]: (_, { payload }) => payload,
});

export default error;
