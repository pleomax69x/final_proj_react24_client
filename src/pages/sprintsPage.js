import Sprint from '../components/Sprints/Sprints';
import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { sprintsOperations } from '../redux/sprints';

const SprintsPage = () => {
  const dispatch = useDispatch();
  const deleteSprint = id => dispatch(sprintsOperations.deleteSprint(id));
  const deleteSprints = id => dispatch(sprintsOperations.deleteSprints(id));

  const [showModal, setShowModal] = useState(false);
  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);
  return (
    <Sprint
      toggleModal={toggleModal}
      showModal={showModal}
      deleteSprint={deleteSprint}
      deleteSprints={deleteSprints}
    />
  );
};

export default SprintsPage;
