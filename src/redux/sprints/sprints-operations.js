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
  deleteSprintsRequest,
  deleteSprintsSuccess,
  deleteSprintsError,
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

const addSprint =
  (projId, title, date, duration, listOfDates) => async dispatch => {
    dispatch(addSprintRequest());
    try {
      const { data } = await axios.post(`/sprints/${projId}`, {
        title,
        date,
        duration,
        listOfDates,
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

const editSprintName = (sprintId, title) => async dispatch => {
  dispatch(editSprintRequest());
  try {
    const { data } = await axios.patch(`/sprints/${sprintId}`, { title });
    dispatch(editSprintSuccess(data.data.sprint));
  } catch (error) {
    dispatch(editSprintError(error.message));
  }
};

const deleteSprints = id => async dispatch => {
  dispatch(deleteSprintsRequest());
  try {
    await axios.delete(`/deleteSprints/${id}`);
    dispatch(deleteSprintsSuccess(id));
  } catch (error) {
    dispatch(deleteSprintsError(error.message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getSprints,
  addSprint,
  deleteSprint,
  editSprintName,
  deleteSprints,
};
