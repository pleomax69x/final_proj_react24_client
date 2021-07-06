import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './tasks-actions';

const {
  getTasksSuccess,
  addTaskSuccess,
  deleteTaskSuccess,
  editTaskSuccess,
  addTaskHoursSuccess,
  changeFilter,
} = actions;

const tasks = createReducer([], {
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
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  tasks,
  filter,
});
