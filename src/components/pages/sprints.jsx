import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import sprintsSelectors from '../../redux/sprints/sprints-selectors';
import Modal from '../Modal';
import SprintCard from '../ProjectCard/ProjectCard';
import { v4 as uuidv4 } from 'uuid';
import СreatingSprint from '../СreatingSprint/СreatingSprint.js';

const Sprint = () => {
  const [showModal, setShowModal] = useState(false);

  const sprints = useSelector(sprintsSelectors.getProjects);

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  return (
    <div>
      <h1>Sprints</h1>
      <button type="button" onClick={toggleModal}>
        Сreat sprint
      </button>
      <ul>
        {sprints.map(project => (
          <SprintCard
            key={uuidv4()}
            title={project.data.project.name}
            descr={project.data.project.description}
          />
        ))}
      </ul>

      {showModal && (
        <Modal onClose={toggleModal}>
          <СreatingSprint onSave={toggleModal} />
        </Modal>
      )}
    </div>
  );
};

export default Sprint;
