import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import TaskPagination from '../TaskPagination';
import {
  tasksSelectors,
  tasksOperations,
  tasksActions,
} from '../../redux/tasks';
import Modal from '../Modal';
import СreatingTask from '../СreatingTask';

import s from './tasks.module.scss';
import Container from '../Container/Container';
import TaskItem from '../TaskItem/TaskItem';

const Tasks = () => {
  const dispatch = useDispatch();
  const deleteTask = id => dispatch(tasksOperations.deleteTask(id));

  const history = useHistory();
  const sprintId = history.location.state;

  const tasks = useSelector(tasksSelectors.getVisibleTasks);
  const filter = useSelector(tasksSelectors.getFilter);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  const [pagDate, setPagDate] = useState('');
  const updatePagDate = useCallback(() => {
    setPagDate();
  }, []);

  const onChange = useCallback(
    e => {
      dispatch(tasksActions.changeFilter(e.target.value));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(tasksOperations.getTasks(sprintId));
  }, [dispatch]);

  useEffect(() => {
    console.log('pagDate', pagDate);
    console.log('tasks', tasks);
    const hoursPerDay = tasks.map(el => el.hoursPerDay);
    console.log('hoursPerDay', hoursPerDay);
    const updatedAt = tasks.map(el => el.updatedAt.slice(0, 10));
    console.log('updatedAt', updatedAt);
  });

  return (
    <Container>
      <TaskPagination sprintId={sprintId} pagDate={setPagDate} />

      <input
        className={s}
        type="text"
        name="filter"
        placeholder=""
        value={filter}
        onChange={onChange}
      />

      <div>
        <h1 className={s.sprint_name}>Sprint Burndown Chart 1</h1>
        <button className={s.edit_sprint_name_button}></button>
      </div>

      <ul>
        {tasks?.map(task => (
          <TaskItem
            key={task._id}
            title={task.title}
            scheduledHours={task.scheduledHours}
            hoursPerDay={task.hoursPerDay}
            totalHours={task.totalHours}
            onClick={() => deleteTask(task._id)}
          />
        ))}
      </ul>

      {showModal && (
        <Modal onClose={toggleModal}>
          <СreatingTask onSave={toggleModal} sprintId={sprintId} />
        </Modal>
      )}
      <button onClick={toggleModal}>+</button>
      <button></button>
    </Container>
  );
};
export default Tasks;
