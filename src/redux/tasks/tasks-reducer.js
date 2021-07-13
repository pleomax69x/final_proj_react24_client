import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './tasks-actions';
import { authActions } from '../auth';

const {
  getTasksSuccess,
  addTaskSuccess,
  deleteTaskSuccess,
  editTaskSuccess,
  addTaskHoursSuccess,
  editScheduledHoursSuccess,
  changeFilter,
} = actions;

const tasks = createReducer([], {
  [authActions.logoutSuccess]: () => [],
  [getTasksSuccess]: (_, { payload }) => payload,
  [addTaskSuccess]: (state, { payload }) => [...state, payload],
  [deleteTaskSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
  [editTaskSuccess]: (state, { payload }) =>
    state.map(item => {
      if (item._id === payload._id) return payload;
      else return item;
    }),
  [addTaskHoursSuccess]: (state, { payload }) =>
    state.map(item => {
      if (item._id === payload._id) return payload;
      else return item;
    }),
  [editScheduledHoursSuccess]: (state, { payload }) =>
    state.map(item => {
      if (item._id === payload.taskId)
        return { ...item, scheduledHours: payload.scheduledHours };
      else return item;
    }),
});

const filter = createReducer('', {
  [authActions.logoutSuccess]: () => '',
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  tasks,
  filter,
});
