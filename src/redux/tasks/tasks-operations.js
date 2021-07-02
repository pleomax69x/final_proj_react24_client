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
  changeDayIndex,
} = actions;

const getTasks = sprintId => async dispatch => {
  dispatch(getTasksRequest());
  try {
    const { data } = await axios.get(`/tasks/${sprintId}`);
    dispatch(getTasksSuccess(data.data.tasks));
  } catch (error) {
    dispatch(getTasksError(error.message));
  }
};

const addTask = (sprintId, title, scheduledHours) => async dispatch => {
  dispatch(addTaskRequest());
  try {
    const { data } = await axios.post(`/tasks/${sprintId}`, {
      title,
      scheduledHours,
    });
    dispatch(addTaskSuccess(data.data.task));
  } catch (error) {
    dispatch(addTaskError(error.message));
  }
};

const deleteTask = tasksId => async dispatch => {
  dispatch(deleteTaskRequest());
  try {
    await axios.delete(`/tasks/${tasksId}`);
    dispatch(deleteTaskSuccess(tasksId));
  } catch (error) {
    dispatch(deleteTaskError(error.message));
  }
};

const editTaskName = (taskId, title) => async dispatch => {
  dispatch(editTaskRequest());
  try {
    const { data } = await axios.patch(`/tasks/${taskId}`, { title });
    dispatch(editTaskSuccess(data.data.task));
  } catch (error) {
    dispatch(editTaskError(error.message));
  }
};

const editTaskHours = (taskId, hoursPerDay) => async dispatch => {
  dispatch(addTaskHoursRequest());
  try {
    const { data } = await axios.patch(`/tasks/${taskId}`, { hoursPerDay });
    dispatch(addTaskHoursSuccess(data.data.task));
  } catch (error) {
    dispatch(addTaskHoursError(error.message));
  }
};

const updateDayIndex = newIndex => async dispatch => {
  dispatch(changeDayIndex(newIndex));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getTasks,
  addTask,
  deleteTask,
  editTaskName,
  editTaskHours,
  updateDayIndex,
};
