import axios from 'axios';
import actions from './tasks-actions';

const {
  getTasksRequest,
  getTasksSuccess,
  getTasksError,
  addTaskRequest,
  addTaskSuccess,
  addTaskError,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskError,
  editTaskRequest,
  editTaskSuccess,
  editTaskError,
  addTaskHoursRequest,
  addTaskHoursSuccess,
  addTaskHoursError,
} = actions;

const getTasks = (projId, sprintId) => async dispatch => {
  dispatch(getTasksRequest());
  try {
    const { data } = await axios.get(
      `/projects/${projId}/sprints/${sprintId}/tasks`,
    );
    dispatch(getTasksSuccess(data));
  } catch (error) {
    dispatch(getTasksError(error.message));
  }
};

const addTask =
  (projId, sprintId, name, startDate, duration) => async dispatch => {
    dispatch(addTaskRequest());
    try {
      const { data } = await axios.post(
        `/projects/${projId}/sprints/${sprintId}/tasks`,
        {
          name,
          startDate,
          duration,
        },
      );
      dispatch(addTaskSuccess(data));
    } catch (error) {
      dispatch(addTaskError(error.message));
    }
  };

const deleteTask = (projId, sprintId, tasksId) => async dispatch => {
  dispatch(deleteTaskRequest());
  try {
    await axios.delete(
      `/projects/${projId}/sprints/${sprintId}/tasks/${tasksId}`,
    );
    dispatch(deleteTaskSuccess(sprintId));
  } catch (error) {
    dispatch(deleteTaskError(error.message));
  }
};

const editTaskName = (projId, sprintId, taskId, updName) => async dispatch => {
  dispatch(editTaskRequest());
  try {
    const { data } = await axios.patch(
      `/projects/${projId}/sprints/${sprintId}/tasks/${taskId}`,
      { updName },
    );
    dispatch(editTaskSuccess(data));
  } catch (error) {
    dispatch(editTaskError(error.message));
  }
};

const editTaskHours = (projId, sprintId, taskId, updDate) => async dispatch => {
  dispatch(addTaskHoursRequest());
  try {
    const { data } = await axios.patch(
      `/projects/${projId}/sprints/${sprintId}/tasks/${taskId}`,
      { updDate },
    );
    dispatch(addTaskHoursSuccess(data));
  } catch (error) {
    dispatch(addTaskHoursError(error.message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getTasks,
  addTask,
  deleteTask,
  editTaskName,
  editTaskHours,
};
