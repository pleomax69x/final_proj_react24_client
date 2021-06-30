import React, { useState, useCallback } from 'react';
import Modal from '../Modal';
import СreatingSprint from '../СreatingSprint';

const Sprint = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  return (
    <div>
      <h1>Sprints</h1>
      <button type="button" onClick={toggleModal}>
        Сreat sprint
      </button>

      {showModal && (
        <Modal onClose={toggleModal}>
          <СreatingSprint onSave={toggleModal} />
        </Modal>
      )}
    </div>
  );
};

export default Sprint;
