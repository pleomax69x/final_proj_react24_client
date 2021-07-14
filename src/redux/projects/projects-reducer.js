import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actions from './projects-actions';
import { authActions } from '../auth';

const {
  getProjectsSuccess,
  addProjectSuccess,
  deleteProjectSuccess,
  editProjectSuccess,
  addTeammateSuccess,
  changeFilter,
  addPeopleSuccess,
  deletePeopleSuccess,
} = actions;

const projects = createReducer([], {
  [authActions.logoutSuccess]: () => [],
  [getProjectsSuccess]: (_, { payload }) => payload,
  [addProjectSuccess]: (state, { payload }) => [...state, payload],
  [deleteProjectSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
  [editProjectSuccess]: (state, { payload }) =>
    state.map(item => {
      if (item._id === payload._id) return payload;
      else return item;
    }),
  [addTeammateSuccess]: (_, { payload }) => payload,
  [addPeopleSuccess]: (state, { payload }) =>
    state.map(item => {
      if (item._id === payload.id) {
        const { teammates } = payload;
        return { ...item, teammates };
      }
      return item;
    }),
  [deletePeopleSuccess]: (state, { payload }) =>
    state.map(item => {
      if (item._id === payload.idProject) {
        const teammates = item.teammates.filter(
          person => person.id !== payload.id,
        );
        return { ...item, teammates };
      } else return item;
    }),
});

const filter = createReducer('', {
  [authActions.logoutSuccess]: () => '',
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ projects, filter });
