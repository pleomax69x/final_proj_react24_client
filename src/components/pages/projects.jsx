import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import projectsSelectors from '../../redux/projects/projects-selectors';
import Modal from '../Modal';
import СreatingProject from '../СreatingProject';
import ProjectCard from '../ProjectCard/ProjectCard';
import { v4 as uuidv4 } from 'uuid';
import styles from './projects.module.scss';
import { useHistory } from 'react-router';
import Container from '../Container/Container';

const Projects = () => {
  const projects = useSelector(projectsSelectors.getProjects);

  const history = useHistory();

  const addProject = id => history.push(`/project/${id}`, id);

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
          {projects.map(project => (
            <ProjectCard
              key={uuidv4()}
              title={project.data.project.name}
              descr={project.data.project.description}
              to={() => addProject(project.data.project._id)}
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
