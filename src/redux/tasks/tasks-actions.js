import { createAction } from '@reduxjs/toolkit';

const getTasksRequest = createAction('tasks/getTasksRequest');
const getTasksSuccess = createAction('tasks/getTasksSuccess');
const getTasksError = createAction('tasks/getTasksError');

const addTaskRequest = createAction('tasks/addTaskRequest');
const addTaskSuccess = createAction('tasks/addTaskSuccess');
const addTaskError = createAction('tasks/addTaskError');

const deleteTaskRequest = createAction('tasks/deleteTaskRequest');
const deleteTaskSuccess = createAction('tasks/deleteTaskSuccess');
const deleteTaskError = createAction('tasks/deleteTaskError');

const editTaskRequest = createAction('tasks/editTaskRequest');
const editTaskSuccess = createAction('tasks/editTaskSuccess');
const editTaskError = createAction('tasks/editTaskError');

const addTaskHoursRequest = createAction('tasks/addTaskHoursRequest');
const addTaskHoursSuccess = createAction('tasks/addTaskHoursSuccess');
const addTaskHoursError = createAction('tasks/addTaskHoursError');

const changeFilter = createAction('tasks/filter');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getTasksRequest,
  getTasksSuccess,
  getTasksError,
  addTaskRequest,
  addTaskSuccess,
  addTaskError,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskError,
  editTaskRequest,
  editTaskSuccess,
  editTaskError,
  addTaskHoursRequest,
  addTaskHoursSuccess,
  addTaskHoursError,
  changeFilter,
};
