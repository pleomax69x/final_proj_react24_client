import { useHistory } from 'react-router';
import React, { useState, useCallback, useEffect } from 'react';
import Tasks from '../components/Tasks/Tasks';
import { useSelector } from 'react-redux';
import { tasksSelectors } from '../redux/tasks';
import { sprintsSelectors } from '../redux/sprints';

const TasksPage = () => {
  const history = useHistory();
  const userId = history.location.state;

  useEffect(() => {
    !userId && history.push('/projects');
  }, [history, userId]);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  const [showChartModal, setShowChartModal] = useState(false);
  const toggleChartModal = useCallback(() => {
    setShowChartModal(prevShowModal => !prevShowModal);
  }, []);

  const tasks = useSelector(tasksSelectors.getVisibleTasks);
  const sprints = useSelector(sprintsSelectors.getSprints);
  const filter = useSelector(tasksSelectors.getFilter);

  return (
    <Tasks
      tasks={tasks}
      sprints={sprints}
      filter={filter}
      showModal={showModal}
      toggleModal={toggleModal}
      showChartModal={showChartModal}
      toggleChartModal={toggleChartModal}
    />
  );
};

export default TasksPage;
