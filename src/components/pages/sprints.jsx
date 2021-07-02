import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import sprintsSelectors from '../../redux/sprints/sprints-selectors';
import sprintsOperations from '../../redux/sprints/sprints-operations';
import СreatingSprint from '../СreatingSprint/СreatingSprint.js';
import SprintsItem from '../SprintsItem';
import Modal from '../Modal';

const Sprint = () => {
  const history = useHistory();
  const sprints = useSelector(sprintsSelectors.getSprints);
  const userId = history.location.state;
  console.log(userId);
  const dispatch = useDispatch();

  const deleteSprint = id => dispatch(sprintsOperations.deleteSprint(id));

  useEffect(() => {
    dispatch(sprintsOperations.getSprints(userId));
  }, [dispatch]);

  console.log(sprints);
  const addSprints = id => history.push(`/projects/${userId}/${id}`, id);

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
          <SprintsItem
            key={sprints.id}
            title={sprints.title}
            date={sprints.date}
            duration={sprints.duration}
            to={() => addSprints(sprints._id)}
            onClick={() => deleteSprint(sprints._id)}
          />
        ))}
      </ul>

      {showModal && (
        <Modal onClose={toggleModal}>
          <СreatingSprint onSave={toggleModal} prId={userId} />
        </Modal>
      )}
    </div>
  );
};

export default Sprint;
