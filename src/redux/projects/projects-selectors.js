import { createSelector } from '@reduxjs/toolkit';

const getProjects = state => state.projects.projects;
const getFilter = state => state.projects.filter;
// const getPeople = state => state.projects.people;

const getVisibleProjects = createSelector(
  [getProjects, getFilter],
  (projects, filter) => {
    console.log(
      filter.length > 0
        ? projects.filter(project => project.owner === filter)
        : projects,
    );
    return filter.length > 0
      ? projects.filter(project => project.owner === filter)
      : projects;
  },
);

// eslint-disable-next-line import/no-anonymous-default-export
export default { getProjects, getFilter, getVisibleProjects };
