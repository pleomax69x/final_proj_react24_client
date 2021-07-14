import axios from 'axios';
import actions from './projects-actions';

axios.defaults.baseURL = 'https://planning-app1.herokuapp.com';

const {
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
  // addTeammateRequest,
  // addTeammateSuccess,
  // addTeammateError,
  deleteProjectsRequest,
  deleteProjectsSuccess,
  deleteProjectsError,
  addPeopleRequest,
  addPeopleSuccess,
  addPeopleError,
  deletePeopleRequest,
  deletePeopleSuccess,
  deletePeopleError,
} = actions;

const getProjects = () => async dispatch => {
  dispatch(getProjectsRequest());
  try {
    const { data } = await axios.get('/projects');
    dispatch(getProjectsSuccess(data.data.projects));
  } catch (error) {
    dispatch(getProjectsError(error.message));
  }
};

const addProject = (name, description) => async dispatch => {
  dispatch(addProjectRequest());
  try {
    const { data } = await axios.post('/projects', { name, description });
    dispatch(addProjectSuccess(data.data.project));
  } catch (error) {
    dispatch(addProjectError(error.message));
  }
};

const deleteProject = id => async dispatch => {
  dispatch(deleteProjectRequest());
  try {
    await axios.delete(`/projects/${id}`);
    dispatch(deleteProjectSuccess(id));
  } catch (error) {
    dispatch(deleteProjectError(error.message));
  }
};

const editProjectName = (id, name) => async dispatch => {
  dispatch(editProjectRequest());
  try {
    const { data } = await axios.patch(`/projects/${id}`, { name });
    dispatch(editProjectSuccess(data.data.project));
  } catch (error) {
    dispatch(editProjectError(error.message));
  }
};

// const addTeammate = (id, email) => async dispatch => {
//   dispatch(addTeammateRequest());
//   try {
//     const { data } = await axios.patch(`/projects/${id}/teammate`, { email });
//     dispatch(addTeammateSuccess(data));
//   } catch (error) {
//     dispatch(addTeammateError(error.message));
//   }
// };

const deleteProjects = () => async dispatch => {
  dispatch(deleteProjectsRequest());
  try {
    await axios.delete(`/deleteProjects`);
    dispatch(deleteProjectsSuccess());
  } catch (error) {
    dispatch(deleteProjectsError(error.message));
  }
};

const addTeammate = (id, email) => async dispatch => {
  dispatch(addPeopleRequest());
  try {
    const { data } = await axios.post(`/teammates/${id}`, { email });
    const teammates = data.data.teammates;
    dispatch(addPeopleSuccess({ id, teammates }));
  } catch (error) {
    dispatch(addPeopleError(error.message));
  }
};

const deletePerson = (id, idProject) => async dispatch => {
  dispatch(deletePeopleRequest());
  try {
    await axios.delete(`/teammates/${idProject}/${id}`);
    dispatch(deletePeopleSuccess({ id, idProject }));
  } catch (error) {
    dispatch(deletePeopleError(error.message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getProjects,
  addProject,
  deleteProject,
  editProjectName,
  addTeammate,
  deleteProjects,
  deletePerson,
};
