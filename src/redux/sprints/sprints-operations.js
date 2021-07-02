import axios from 'axios';
import actions from './sprints-actions';

axios.defaults.baseURL = 'https://planning-app1.herokuapp.com';

const {
  getSprintsRequest,
  getSprintsSuccess,
  getSprintsError,
  addSprintRequest,
  addSprintSuccess,
  addSprintError,
  deleteSprintRequest,
  deleteSprintSuccess,
  deleteSprintError,
  editSprintRequest,
  editSprintSuccess,
  editSprintError,
} = actions;

const getSprints = projId => async dispatch => {
  dispatch(getSprintsRequest());
  try {
    const { data } = await axios.get(`/sprints/${projId}`);
    dispatch(getSprintsSuccess(data.data.sprints));
  } catch (error) {
    dispatch(getSprintsError(error.message));
  }
};

const addSprint = (projId, name, startDate, duration) => async dispatch => {
  dispatch(addSprintRequest());
  try {
    const { data } = await axios.post(`/sprints/${projId}`, {
      name,
      startDate,
      duration,
    });
    dispatch(addSprintSuccess(data.data.sprint));
  } catch (error) {
    dispatch(addSprintError(error.message));
  }
};

const deleteSprint = sprintId => async dispatch => {
  dispatch(deleteSprintRequest());
  try {
    await axios.delete(`/sprints/${sprintId}`);
    dispatch(deleteSprintSuccess(sprintId));
  } catch (error) {
    dispatch(deleteSprintError(error.message));
  }
};

const editSprintName = (sprintId, updName) => async dispatch => {
  dispatch(editSprintRequest());
  try {
    const { data } = await axios.patch(`/sprints/${sprintId}`, { updName });
    dispatch(editSprintSuccess(data.data.sprint));
  } catch (error) {
    dispatch(editSprintError(error.message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getSprints,
  addSprint,
  deleteSprint,
  editSprintName,
};
