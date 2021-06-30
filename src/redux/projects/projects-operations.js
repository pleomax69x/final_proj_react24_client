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
  addTeammateRequest,
  addTeammateSuccess,
  addTeammateError,
} = actions;

const getProjects = () => async dispatch => {
  dispatch(getProjectsRequest());
  try {
    const { data } = await axios.get('/projects');
    dispatch(getProjectsSuccess(data));
  } catch (error) {
    dispatch(getProjectsError(error.message));
  }
};

const addProject = (name, description) => async dispatch => {
  dispatch(addProjectRequest());
  try {
    const { data } = await axios.post('/projects', { name, description });
    dispatch(addProjectSuccess(data));
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

const editProjectName = (id, updName) => async dispatch => {
  dispatch(editProjectRequest());
  try {
    const { data } = await axios.patch(`/projects/${id}`, { updName });
    dispatch(editProjectSuccess(data));
  } catch (error) {
    dispatch(editProjectError(error.message));
  }
};

const addTeammate = (id, email) => async dispatch => {
  dispatch(addTeammateRequest());
  try {
    const { data } = await axios.patch(`/projects/${id}/teammate`, { email });
    dispatch(addTeammateSuccess(data));
  } catch (error) {
    dispatch(addTeammateError(error.message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getProjects,
  addProject,
  deleteProject,
  editProjectName,
  addTeammate,
};
