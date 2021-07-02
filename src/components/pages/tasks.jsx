import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasksSelectors, tasksOperations } from '../../redux/tasks';
import Modal from '../Modal';
// import СreatingTask from '../СreatingTask';

import s from './tasks.module.scss';
import { useHistory } from 'react-router';
import Container from '../Container/Container';
import TaskItem from '../TaskItem/TaskItem';

const Tasks = () => {
  const tasks = useSelector(tasksSelectors.getVisibleTasks);
  const dispatch = useDispatch();
  const deleteTask = id => dispatch(tasksOperations.deleteTask(id));

  useEffect(() => {
    dispatch(tasksOperations.getTasks());
  }, [dispatch]);

  const history = useHistory();

  const addTask = id => history.push(`/tasks/${id}`, id);

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

      <form className={s} onSubmit={1}>
        <input
          className={s}
          type="text"
          name="name"
          placeholder=""
          // value={name}
          // onChange={updateName}
        />
      </form>
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
            // to={() => addTask(task._id)}
            onClick={() => deleteTask(task._id)}
          />
        ))}
      </ul>
      {showModal && (
        <Modal onClose={toggleModal}>
          {/* <СreatingTask onSave={toggleModal} /> */}
        </Modal>
      )}
      <button onClick={toggleModal}>+</button>
      <button></button>
    </Container>
  );
};
export default Tasks;

// const Projects = () => {
//   const projects = useSelector(projectsSelectors.getProjects);

//   const dispatch = useDispatch();

//   const deleteProject = id => dispatch(projectsOperations.deleteProject(id));

//   useEffect(() => {
//     dispatch(projectsOperations.getProjects());
//   }, [dispatch]);

//   const history = useHistory();

//   console.log(projects);
//   const addProject = id => history.push(`/projects/${id}`, id);

//   const [showModal, setShowModal] = useState(false);

//   const toggleModal = useCallback(() => {
//     setShowModal(prevShowModal => !prevShowModal);
//   }, []);

//   return (
//     <Container>
//       <div className={styles.wrapper}>
//         <div className={styles.headWrapper}>
//           <h2>Projects</h2>
//           <label className={styles.btnWrapper}>
//             <button className={styles.btn} onClick={toggleModal}></button>
//             <p className={styles.text}>Create a project</p>
//           </label>
//         </div>
//         <ul className={styles.list}>
//           {projects?.map(project => (
//             <ProjectCard
//               key={project._id}
//               title={project.name}
//               descr={project.description}
//               to={() => addProject(project._id)}
//               onClick={() => deleteProject(project._id)}
//             />
//           ))}
//         </ul>

//         {showModal && (
//           <Modal onClose={toggleModal}>
//             <СreatingProject onSave={toggleModal} />
//           </Modal>
//         )}
//       </div>
//     </Container>
//   );
// };

// export default Projects;
