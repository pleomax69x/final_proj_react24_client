import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import sprintsSelectors from '../../redux/sprints/sprints-selectors';
import sprintsOperations from '../../redux/sprints/sprints-operations';
import СreatingSprint from '../СreatingSprint/СreatingSprint.js';
import SprintsItem from '../SprintsItem';
import Modal from '../Modal';

const Sprint = () => {
  const dispatch = useDispatch();
  const sprints = useSelector(sprintsSelectors.getSprints);

  const history = useHistory();
  const projectId = history.location.state;

  const deleteSprint = id => dispatch(sprintsOperations.deleteSprint(id));

  useEffect(() => {
    dispatch(sprintsOperations.getSprints(projectId));
  }, [dispatch, projectId]);

  const addSprints = id => history.push(`/projects/${projectId}/${id}`, id);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  console.log(projectId, 'Sprints:', sprints);
  return (
    <div>
      <h1>Sprints</h1>
      <button type="button" onClick={toggleModal}>
        Сreat sprint
      </button>
      <ul>
        {sprints?.map(sprint => (
          <SprintsItem
            key={sprint._id}
            title={sprint.title}
            date={sprint.date}
            duration={sprint.duration}
            to={() => addSprints(sprint._id)}
            onClick={() => deleteSprint(sprint._id)}
          />
        ))}
      </ul>

      {showModal && (
        <Modal onClose={toggleModal}>
          <СreatingSprint onSave={toggleModal} prId={projectId} />
        </Modal>
      )}
    </div>
  );
};

export default Sprint;
