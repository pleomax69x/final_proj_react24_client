import { createSelector } from '@reduxjs/toolkit';

const getProjects = state => state.projects.projects;
const getProjectsById = (state, id) =>
  state.projects.projects.find(item => item._id === id);
const getFilter = state => state.projects.filter;

const getTeammates = (state, projectID) => {
  if (projectID !== undefined && state.projects.projects.length > 0) {
    const project = state.projects.projects.find(
      item => item._id === projectID,
    );
    return project.teammates;
  }
  return null;
};

const getVisibleProjects = createSelector(
  [getProjects, getFilter],
  (projects, filter) => {
    return filter.length > 0
      ? projects.filter(project => project.owner === filter)
      : projects;
  },
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getProjects,
  getFilter,
  getVisibleProjects,
  getProjectsById,
  getTeammates,
};
