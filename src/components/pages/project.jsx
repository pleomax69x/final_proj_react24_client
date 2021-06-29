import React, { useState, useCallback } from 'react';
import Modal from '../Modal';
import СreatingProject from '../СreatingProject';

const Project = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  return (
    <div>
      <h1>Project</h1>
      <button type="button" onClick={toggleModal}>
        Сreat project
      </button>

      {showModal && (
        <Modal onClose={toggleModal}>
          <СreatingProject onSave={toggleModal} />
        </Modal>
      )}
    </div>
  );
};

export default Project;
