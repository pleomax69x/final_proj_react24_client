import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actions from './projects-actions';

const {
  getProjectsSuccess,
  addProjectSuccess,
  deleteProjectSuccess,
  editProjectSuccess,
  addTeammateSuccess,
  changeFilter,
} = actions;

const projects = createReducer([], {
  [getProjectsSuccess]: (_, { payload }) => payload,
  [addProjectSuccess]: (state, { payload }) => [...state, payload],
  [deleteProjectSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
  [editProjectSuccess]: (state, { payload }) =>
    state.map(item => {
      console.log(item._id);
      if (item._id === payload._id) return payload;
      else return item;
    }),
  [addTeammateSuccess]: (_, { payload }) => payload,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ projects, filter });
