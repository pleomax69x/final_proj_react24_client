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
import sprintsSelectors from '../../redux/sprints/sprints-selectors';

import s from './tasks.module.scss';
import Container from '../Container/Container';
import TaskItem from '../TaskItem/TaskItem';
import Sidebar from '../Sidebar/Sidebar';
import sprintsOperations from '../../redux/sprints/sprints-operations';


const Tasks = () => {
  const dispatch = useDispatch();
  const deleteTask = id => dispatch(tasksOperations.deleteTask(id));


  const history = useHistory();
  const sprintId = history.location.state;

  // console.log( projectId);

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
    dispatch(sprintsOperations.getSprints(projectId));
  }, [dispatch]);

  useEffect(() => {
    console.log('pagDate', pagDate);
    console.log('tasks', tasks);
    const hoursPerDay = tasks.map(el => el.hoursPerDay);
    console.log('hoursPerDay', hoursPerDay);
    const updatedAt = tasks.map(el => el.updatedAt.slice(0, 10));
    console.log('updatedAt', updatedAt);
  });

  const sprints = useSelector(sprintsSelectors.getSprints);

  return (
    <Container>

      <TaskPagination sprintId={sprintId} pagDate={setPagDate} />


            {/* <input
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
      </div> */}

            <div className={s.wrapper_all}>
              <div className={s.wrapper_wr}>
                <div className={s.wrapper_tasks}>
                  <h1 className={s.sprint_name}>Sprint Burndown Chart 1</h1>
                  <button className={s.edit_sprint_name_button}></button>
                </div>
                <div className={s.wrap_tasks}>
                  <button
                    onClick={toggleModal}
                    className={s.add_task_button}
                  ></button>
                  <p className={s.task_name}>Create a task</p>
                </div>
              </div>
              <div className={s.table_list_wrapper}>
                <ul className={s.table_list}>
                  <li className={s.table_item}>
                    <p className={s.table_title}>Task</p>
                  </li>
                  <li className={s.table_item}>
                    <p className={s.table_title}>Scheduled hours</p>
                  </li>
                  <li className={s.table_item}>
                    <p className={s.table_title}>Spent hour / day</p>
                  </li>
                  <li className={s.table_item}>
                    <p className={s.table_title}>Hours spent</p>
                  </li>
                </ul>
                <form className={s.search_form} onSubmit={1}>
                  <input
                    className={s.search_form_input}
                    type="text"
                    name="filter"
                    placeholder=""
                    value={filter}
                    onChange={onChange}
                    // name="name"
                  />
                  <button
                    type="submit"
                    className={s.search_form_button}
                  ></button>
                </form>
              </div>
            </div>
          </div>

          <ul className={s.card_list}>
            {tasks?.map(task => (
              <TaskItem
                // className={s.item}
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
          {/* <button onClick={toggleModal}>+</button>
        <button></button> */}
        </div>
      </div>
    </Container>
  );
};
export default Tasks;
