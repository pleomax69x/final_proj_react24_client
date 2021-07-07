import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.tasks.filter;
const getTasks = state => state.tasks.tasks;

const getVisibleTasks = createSelector(
  [getTasks, getFilter],
  (tasks, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return filter.length > 0
      ? tasks.filter(task =>
          task.title.toLowerCase().includes(normalizedFilter),
        )
      : tasks;
  },
);

// eslint-disable-next-line import/no-anonymous-default-export
export default { getTasks, getFilter, getVisibleTasks };
