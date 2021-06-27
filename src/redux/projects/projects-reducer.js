import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './projects-actions';

const {
  getProjectsRequest,
  getProjectsSuccess,
  getProjectsError,
  addProjectRequest,
  addProjectSuccess,
  addProjectError,
  deleteProjectRequest,
  deleteProjectSuccess,
  deleteProjectError,
  editProjectRequest,
  editProjectSuccess,
  editProjectError,
  addTeammateRequest,
  addTeammateSuccess,
  addTeammateError,
} = actions;

const projects = createReducer([], {
  [getProjectsSuccess]: (_, { payload }) => payload,
  [addProjectSuccess]: (state, { payload }) => [...state, payload],
  [deleteProjectSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [editProjectSuccess]: (state, { payload }) =>
    state.map(item => {
      if (item.id === payload.id) return payload;
      else return item;
    }),
  [addTeammateSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [getProjectsRequest]: () => true,
  [getProjectsSuccess]: () => false,
  [getProjectsError]: () => false,
  [addProjectRequest]: () => true,
  [addProjectSuccess]: () => false,
  [addProjectError]: () => false,
  [deleteProjectRequest]: () => true,
  [deleteProjectSuccess]: () => false,
  [deleteProjectError]: () => false,
  [editProjectRequest]: () => true,
  [editProjectSuccess]: () => false,
  [editProjectError]: () => false,
  [addTeammateRequest]: () => true,
  [addTeammateSuccess]: () => false,
  [addTeammateError]: () => false,
});

export default combineReducers({
  projects,
  loading,
});
