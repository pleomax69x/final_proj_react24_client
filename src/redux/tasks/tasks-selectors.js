import { createSelector } from '@reduxjs/toolkit';

const getCurrentDay = state => state.tasks.indexCurrentDay;
const getFilter = state => state.tasks.filter;
const getTasks = state => state.tasks.tasks;

const getVisibleTasks = createSelector(
  [getTasks, getFilter],
  (tasks, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return filter.length > 0
      ? tasks.filter(task => task.name.toLowerCase().includes(normalizedFilter))
      : tasks;
  },
);

// eslint-disable-next-line import/no-anonymous-default-export
export default { getCurrentDay, getTasks, getVisibleTasks };
