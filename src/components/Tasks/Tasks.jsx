import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { sprintsOperations } from '../../redux/sprints';
import { tasksOperations } from '../../redux/tasks';
import Container from '../Container/Container';
import TaskSection from './TaskSection';
import СreatingTask from './СreatingTask';
import Sidebar from '../Sidebar/Sidebar';
import СreatingSprint from '../Sprints/СreatingSprint';
import Modal from '../Modal';
import ChartModal from '../ChartModal';
import s from './tasks.module.scss';

const Tasks = ({
  tasks,
  sprints,
  filter,
  showModal,
  toggleModal,
  showChartModal,
  toggleChartModal,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const sprintId = history.location.state;
  const projectId = history.location.pathname.slice(10, 34);

  const deleteTask = id => dispatch(tasksOperations.deleteTask(id));

  const transitiontoProject = id =>
    history.push(`/projects/${projectId}/${id}`, id);

  const getTasks = useCallback(
    () => dispatch(tasksOperations.getTasks(sprintId)),
    [dispatch, sprintId],
  );

  const getSprints = useCallback(
    () => dispatch(sprintsOperations.getSprints(projectId)),
    [dispatch, projectId],
  );

  const currSprint = sprints.find(item => item._id === sprintId);

  useEffect(() => {
    getSprints();
  }, [getSprints]);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <Container>
      <div className={s.pageWrapper}>
        <Sidebar
          projectId={projectId}
          data={sprints}
          link={`/projects/${projectId}`}
          transition={transitiontoProject}
          type="sprint"
          Creating={СreatingSprint}
          activeItemId={currSprint?._id}
        />

        <TaskSection
          getSprints={getSprints}
          getTasks={getTasks}
          filter={filter}
          deleteTask={deleteTask}
          toggleModal={toggleModal}
          toggleChartModal={toggleChartModal}
        />
      </div>
      {showModal && (
        <Modal onClose={toggleModal}>
          <СreatingTask onSave={toggleModal} sprintId={sprintId} />
        </Modal>
      )}

      {showChartModal && (
        <ChartModal
          onClose={toggleChartModal}
          tasks={tasks}
          sprintDuration={currSprint.duration}
          sprintTitle={currSprint.title}
        />
      )}
    </Container>
  );
};
export default Tasks;
