import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { sprintsSelectors } from '../../redux/sprints/';
import { tasksSelectors } from '../../redux/tasks';
import { tasksActions } from '../../redux/tasks';
import TaskHeader from '../TaskHeader';
import TaskItem from '../TaskItem/TaskItem';
import TaskPagination from '../TaskPagination';
import s from './TaskSection.module.scss';

const TaskSection = ({
  getSprints,
  getTasks,
  filter,
  deleteTask,
  toggleModal,
  toggleChartModal,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sprintId = history.location.state;

  const tasks = useSelector(tasksSelectors.getVisibleTasks);
  const sprints = useSelector(sprintsSelectors.getSprints);

  const [pagDate, setPagDate] = useState('');
  const [pagDateIndex, setPagDateIndex] = useState(0);

  const onChange = useCallback(
    e => {
      dispatch(tasksActions.changeFilter(e.target.value));
    },
    [dispatch],
  );

  const currSprint = sprints.find(item => item._id === sprintId);

  const updatePagDate = value => {
    setPagDate(value);
  };

  const updatePagDateIndex = value => {
    setPagDateIndex(value);
  };

  useEffect(() => {
    getSprints();
  }, [getSprints]);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <div>
      <div className={s.contentWrapper}>
        <div style={{ position: 'relative' }}>
          {tasks.length > 0 ? (
            <TaskPagination
              sprintId={sprintId}
              pagDate={updatePagDate}
              pagIndex={updatePagDateIndex}
            />
          ) : null}

          <TaskHeader
            currSprint={currSprint}
            toggleModal={toggleModal}
            filter={filter}
            onChange={onChange}
          />
        </div>

        <ul className={s.card_list}>
          {pagDateIndex !== undefined && tasks.length > 0
            ? tasks?.map(task => (
                <TaskItem
                  key={task._id}
                  id={task._id}
                  title={task.title}
                  scheduledHours={task.scheduledHours}
                  hoursPerDay={task.hoursPerDay[pagDateIndex].hours}
                  totalHours={task.totalHours}
                  currDate={pagDate}
                  onClick={() => deleteTask(task._id)}
                />
              ))
            : null}
        </ul>
        <div className={s.buttonContainer}>
          {tasks?.length > 2 ? (
            <button
              className={s.button_analytics}
              onClick={toggleChartModal}
            ></button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TaskSection;

// const projectId = history.location.pathname.slice(10, 34);

// const filter = useSelector(tasksSelectors.getFilter);
// const deleteTask = id => dispatch(tasksOperations.deleteTask(id));

// const transitiontoProject = id =>
//   history.push(`/projects/${projectId}/${id}`, id);
// const dispatch = useDispatch();

// const getTasks = useCallback(
//   () => dispatch(tasksOperations.getTasks(sprintId)),
//   [dispatch, sprintId],
// );

// const getSprints = useCallback(
//   () => dispatch(sprintsOperations.getSprints(projectId)),
//   [dispatch, projectId],
// );
