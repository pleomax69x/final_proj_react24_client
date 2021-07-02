import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import sprintsSelectors from '../../redux/sprints/sprints-selectors';
import sprintsOperations from '../../redux/sprints/sprints-operations';
import СreatingSprint from '../СreatingSprint/СreatingSprint.js';
import SprintCard from '../SprintCard/SprintCard';
import Modal from '../Modal';

const Sprint = () => {
  const sprints = useSelector(sprintsSelectors.getSprints);

  const dispatch = useDispatch();

  const deleteSprint = id => dispatch(sprintsOperations.deleteSprint(id));

  useEffect(() => {
    dispatch(sprintsOperations.getSprints());
  }, [dispatch]);

  const history = useHistory();

  console.log(sprints);
  const addSprints = id => history.push(`/sprints/${id}`, id);

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
      <ul>
        {sprints.map(sprints => (
          <SprintCard
            key={sprints.id}
            title={sprints.title}
            date={sprints.date}
            duration={sprints.duration}
            to={() => addSprints(sprints.id)}
            onClick={() => deleteSprint(sprints.id)}
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
