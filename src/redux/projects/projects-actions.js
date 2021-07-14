import { createAction } from '@reduxjs/toolkit';

const getProjectsRequest = createAction('projects/getProjectsRequest');
const getProjectsSuccess = createAction('projects/getProjectsSuccess');
const getProjectsError = createAction('projects/getProjectsError');

const addProjectRequest = createAction('projects/addProjectRequest');
const addProjectSuccess = createAction('projects/addProjectSuccess');
const addProjectError = createAction('projects/addProjectError');

const deleteProjectRequest = createAction('projects/deleteProjectRequest');
const deleteProjectSuccess = createAction('projects/deleteProjectSuccess');
const deleteProjectError = createAction('projects/deleteProjectError');

const editProjectRequest = createAction('projects/editProjectRequest');
const editProjectSuccess = createAction('projects/editProjectSuccess');
const editProjectError = createAction('projects/editProjectError');

const addTeammateRequest = createAction('projects/addTeammateRequest');
const addTeammateSuccess = createAction('projects/addTeammateSuccess');
const addTeammateError = createAction('projects/addTeammateError');

const deleteProjectsRequest = createAction('projects/deleteProjectsRequest');
const deleteProjectsSuccess = createAction('projects/deleteProjectsSuccess');
const deleteProjectsError = createAction('projects/deleteProjectsError');

const changeFilter = createAction('projects/changeFilter');

const addPeopleRequest = createAction('projects/addPeopleRequest');
const addPeopleSuccess = createAction('projects/addPeopleSuccess');
const addPeopleError = createAction('projects/addPeopleError');

const deletePeopleRequest = createAction('projects/deletePeopleRequest');
const deletePeopleSuccess = createAction('projects/deletePeopleSuccess');
const deletePeopleError = createAction('projects/deletePeopleError');
// eslint-disable-next-line import/no-anonymous-default-export
export default {
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
  deleteProjectsRequest,
  deleteProjectsSuccess,
  deleteProjectsError,
  changeFilter,
  addPeopleRequest,
  addPeopleSuccess,
  addPeopleError,
  deletePeopleRequest,
  deletePeopleSuccess,
  deletePeopleError,
};
