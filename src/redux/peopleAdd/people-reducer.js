import { createReducer } from '@reduxjs/toolkit';
import actions from './people-actions';

const { addPeopleSuccess, deletePeopleSuccess } = actions;

const people = createReducer([], {
  [addPeopleSuccess]: (state, { payload }) => [...state, payload],
  [deletePeopleSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
  // [addTeammateSuccess]: (_, { payload }) => payload,
});

export default people;
