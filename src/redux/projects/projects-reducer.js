import { combineReducers, createReducer } from '@reduxjs/toolkit';
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
    state.filter(({ _id }) => _id !== payload),
  [editProjectSuccess]: (state, { payload }) =>
    state.map(item => {
      if (item._id === payload.id) return payload;
      else return item;
    }),
  [addTeammateSuccess]: (_, { payload }) => payload,
});

const error = createReducer('', {
  [getProjectsRequest]: () => '',
  [getProjectsSuccess]: () => '',
  [getProjectsError]: (_, payload) => payload,
  [addProjectRequest]: () => '',
  [addProjectSuccess]: () => '',
  [addProjectError]: (_, payload) => payload,
  [deleteProjectRequest]: () => '',
  [deleteProjectSuccess]: () => '',
  [deleteProjectError]: (_, payload) => payload,
  [editProjectRequest]: () => '',
  [editProjectSuccess]: () => '',
  [editProjectError]: (_, payload) => payload,
  [addTeammateRequest]: () => '',
  [addTeammateSuccess]: () => '',
  [addTeammateError]: (_, payload) => payload,
});

export default combineReducers({ projects, error });
