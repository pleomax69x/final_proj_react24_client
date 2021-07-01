import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actions from './sprints-actions';

const {
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
} = actions;

const sprints = createReducer([], {
  [getSprintsSuccess]: (_, { payload }) => payload,
  [addSprintSuccess]: (state, { payload }) => [...state, payload],
  [deleteSprintSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
  [editSprintSuccess]: (state, { payload }) =>
    state.map(item => {
      if (item._id === payload._id) return payload;
      else return item;
    }),
});

const error = createReducer('', {
  [getSprintsRequest]: () => true,
  [getSprintsSuccess]: () => '',
  [getSprintsError]: (_, payload) => payload,
  [addSprintRequest]: () => '',
  [addSprintSuccess]: () => '',
  [addSprintError]: (_, payload) => payload,
  [deleteSprintRequest]: () => '',
  [deleteSprintSuccess]: () => '',
  [deleteSprintError]: (_, payload) => payload,
  [editSprintRequest]: () => '',
  [editSprintSuccess]: () => '',
  [editSprintError]: (_, payload) => payload,
});

export default combineReducers({ sprints, error });
