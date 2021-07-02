import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import projectsSelectors from '../../redux/projects/projects-selectors';
import Modal from '../Modal';
import СreatingProject from '../СreatingProject';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './projects.module.scss';
import { useHistory } from 'react-router';
import Container from '../Container/Container';
import projectsOperations from '../../redux/projects/projects-operations';

const Projects = () => {
  const projects = useSelector(projectsSelectors.getProjects);

  const dispatch = useDispatch();

  const deleteProject = id => dispatch(projectsOperations.deleteProject(id));

  useEffect(() => {
    dispatch(projectsOperations.getProjects());
  }, [dispatch]);

  const history = useHistory();

  const transitiontoProject = id => history.push(`/projects/${id}`, id);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.headWrapper}>
          <h2>Projects</h2>
          <label className={styles.btnWrapper}>
            <button className={styles.btn} onClick={toggleModal}></button>
            <p className={styles.text}>Create a project</p>
          </label>
        </div>
        <ul className={styles.list}>
          {projects?.map(project => (
            <ProjectCard
              key={project._id}
              title={project.name}
              descr={project.description}
              to={() => transitiontoProject(project._id)}
              onClick={() => deleteProject(project._id)}
            />
          ))}
        </ul>

        {showModal && (
          <Modal onClose={toggleModal}>
            <СreatingProject onSave={toggleModal} />
          </Modal>
        )}
      </div>
    </Container>
  );
};

export default Projects;
