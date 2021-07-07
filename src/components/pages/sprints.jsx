import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import sprintsSelectors from '../../redux/sprints/sprints-selectors';
import peopleSelectors from '../../redux/peopleAdd/people-selectors';
import sprintsOperations from '../../redux/sprints/sprints-operations';
import СreatingSprint from '../СreatingSprint/СreatingSprint.js';
import СreatingPeopleItem from '../AddPeopleItem/CreatingPeopleItem';
import SprintsItem from '../SprintsItem';
import AddPeople from '../AddPeopleItem/PeopleItem';
import Modal from '../Modal/Modal';
import PeopleModal from '../Modal/PeopleModal';

const Sprint = () => {
  const dispatch = useDispatch();
  const deleteSprint = id => dispatch(sprintsOperations.deleteSprint(id));

  const history = useHistory();
  const getState = history.location.state;
  const compareWithPathName = history.location.pathname.slice(10);
  const getStorageData = localStorage.getItem('persist:token');
  const token = JSON.parse(getStorageData).token;

  const sprints = useSelector(sprintsSelectors.getSprints);
  const teammate = useSelector(peopleSelectors.getPeople);

  const projectId = history.location.state;
  const addSprints = id => history.push(`/projects/${projectId}/${id}`, id);
  const [showModal, setShowModal] = useState(false);
  const [addPeopleModal, setAddPeopleModal] = useState(false);
  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  const togglePeopleModal = useCallback(() => {
    setAddPeopleModal(prevShowModal => !prevShowModal);
  }, []);

  useEffect(() => {
    dispatch(sprintsOperations.getSprints(projectId));
  }, [dispatch, projectId]);

  useEffect(() => {
    if (compareWithPathName !== getState && !token) {
      history.push('/register');
    }
  }, [compareWithPathName, getState, history, token]);

  console.log(projectId, 'Sprints:', sprints);
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
      )}{' '}
      <AddPeople
        teammate={teammate}
        // to={addSprints}
        // del={deleteSprint}
        toggleModal={togglePeopleModal}
      />
      {addPeopleModal && (
        <PeopleModal onClose={togglePeopleModal}>
          <СreatingPeopleItem onSave={toggleModal} prId={projectId} />
        </PeopleModal>
      )}
    </div>
  );
};

export default Sprint;
