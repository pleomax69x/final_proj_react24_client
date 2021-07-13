import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router';
import Sprint from '../components/sprints/Sprints';
import { useDispatch } from 'react-redux';
import { sprintsOperations } from '../redux/sprints';

const SprintsPage = () => {
  const history = useHistory();
  const userId = history.location.state;
  const dispatch = useDispatch();

  useEffect(() => {
    !userId && history.push('/projects');
  }, [history, userId]);

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
