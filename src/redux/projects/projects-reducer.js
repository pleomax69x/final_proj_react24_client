import { createReducer } from '@reduxjs/toolkit';
import actions from './projects-actions';

const {
  getProjectsSuccess,
  addProjectSuccess,
  deleteProjectSuccess,
  editProjectSuccess,
  addTeammateSuccess,
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

export default projects;
