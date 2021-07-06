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
  const deleteSprint = id => dispatch(sprintsOperations.deleteSprint(id));

  const history = useHistory();
  const getState = history.location.state;
  const compareWithPathName = history.location.pathname.slice(10);
  const getStorageData = localStorage.getItem('persist:token');
  const token = JSON.parse(getStorageData).token;

  const sprints = useSelector(sprintsSelectors.getSprints);

  const projectId = history.location.state;
  const addSprints = id => history.push(`/projects/${projectId}/${id}`, id);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  useEffect(() => {
    dispatch(sprintsOperations.getSprints(projectId));
  }, [dispatch, projectId]);
  
  useEffect(() => {
    if (compareWithPathName !== getState && !token) {
      history.push('/register');
    }
  }, [compareWithPathName, getState, history, token]);
  
  return (
    <div>
      <SprintsItem
        sprints={sprints}
        to={addSprints}
        del={deleteSprint}
        toggleModal={toggleModal}
      />
      {showModal && (
        <Modal onClose={toggleModal}>
          <СreatingSprint onSave={toggleModal} prId={projectId} />
        </Modal>
      )}
    </div>
  );
};

export default Sprint;
