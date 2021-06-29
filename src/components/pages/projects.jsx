import React, { useState, useCallback } from 'react';
import Modal from '../Modal';
import СreatingProject from '../СreatingProject';
import ProjectCard from '../ProjectCard/ProjectCard';
import { v4 as uuidv4 } from 'uuid';
import styles from './projects.module.scss';
import { useHistory } from 'react-router';

const fakeData = [
  {
    title: '1-project',
    descr: 'It is my 1 project',
  },
  {
    title: '2-project',
    descr: 'It is my 2 project',
  },
  {
    title: '3-project',
    descr: 'It is my 3 project',
  },
];

const Projects = () => {
  const history = useHistory();

  const addProject = () => history.push('/');

  const [showModal, setShowModal] = useState(false);

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.headWrapper}>
        <h2>Projects</h2>
        <label className={styles.btnWrapper}>
          <button className={styles.btn} onClick={toggleModal}></button>
          <p className={styles.text}>Create a project</p>
        </label>
      </div>
      <ul className={styles.list}>
        {fakeData.map(({ title, descr }) => (
          <ProjectCard key={uuidv4()} title={title} descr={descr} />
        ))}
      </ul>

      {showModal && (
        <Modal onClose={toggleModal}>
          <СreatingProject onSave={toggleModal} />
        </Modal>
      )}
    </div>
  );
};

export default Projects;
