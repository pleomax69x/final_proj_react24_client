import axios from 'axios';
import actions from './people-actions';

axios.defaults.baseURL = 'https://planning-app1.herokuapp.com';

const {
  addPeopleRequest,
  addPeopleSuccess,
  addPeopleError,
  deletePeopleRequest,
  deletePeopleSuccess,
  deletePeopleError,
} = actions;

const addTeammate = (id, email) => async dispatch => {
  dispatch(addPeopleRequest());
  console.log('id', id);
  console.log('email', email);
  try {
    const { data } = await axios.post(`/teammates/${id}`, { email });
    console.log(data);
    dispatch(addPeopleSuccess(data.teammates));
  } catch (error) {
    dispatch(addPeopleError(error.message));
  }
};

const deletePerson = (id, idProject) => async dispatch => {
  console.log(id, idProject);
  dispatch(deletePeopleRequest());
  try {
    await axios.delete(`/teammates/${idProject}/${id}`);
    dispatch(deletePeopleSuccess(id));
  } catch (error) {
    dispatch(deletePeopleError(error.message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  addTeammate,
  deletePerson,
};
