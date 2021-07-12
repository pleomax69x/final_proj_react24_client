import { createReducer } from '@reduxjs/toolkit';
import actions from './sprints-actions';

const {
  getSprintsSuccess,
  addSprintSuccess,
  deleteSprintSuccess,
  editSprintSuccess,
} = actions;

const sprints = createReducer([], {
  [getSprintsSuccess]: (_, { payload }) => payload,
  [addSprintSuccess]: (state, { payload }) => [...state, payload],
  [deleteSprintSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
  [editSprintSuccess]: (state, { payload }) =>
    state.map(item => {
      const { newTitle, id } = payload;
      if (item._id === id) {
        const title = newTitle;
        return { ...item, title };
      } else return item;
    }),
});

export default sprints;
