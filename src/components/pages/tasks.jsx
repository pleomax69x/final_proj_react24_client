import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  tasksSelectors,
  tasksOperations,
  tasksActions,
} from '../../redux/tasks';
import Modal from '../Modal';
import СreatingTask from '../СreatingTask';

import s from './tasks.module.scss';
import { useHistory } from 'react-router';
import Container from '../Container/Container';
import TaskItem from '../TaskItem/TaskItem';

const Tasks = () => {
  const history = useHistory();
  const userId = history.location.state;
  const tasks = useSelector(tasksSelectors.getVisibleTasks);
  const dispatch = useDispatch();
  const deleteTask = id => dispatch(tasksOperations.deleteTask(id));
  const filter = useSelector(tasksSelectors.getFilter);
  const onChange = useCallback(
    e => {
      dispatch(tasksActions.changeFilter(e.target.value));
    },
    [dispatch],
  );
  useEffect(() => {
    dispatch(tasksOperations.getTasks(userId));
  }, [dispatch]);
  console.log(tasks);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  return (
    <Container>
      <div className={s.current_date_wrapper}>
        <div className={s.days_wrapper}>
          <button className={s.back_button} type="button"></button>
          <p className={s.сurrent_day}>
            2<span className={s.slash_days}>/</span>
            <span className={s.duration_days}>12</span>
          </p>
          <button className={s.forward_button}></button>
        </div>
        <p className={s.date}>01.01.2021</p>
      </div>

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
          <СreatingTask onSave={toggleModal} />
        </Modal>
      )}
      <button onClick={toggleModal}>+</button>
      <button></button>
    </Container>
  );
};
export default Tasks;
