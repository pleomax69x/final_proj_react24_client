import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { CSSTransition } from 'react-transition-group';
import { sprintsSelectors, sprintsOperations } from '../../redux/sprints';
import { projectsOperations, projectsSelectors } from '../../redux/projects';
import { authSelectors } from '../../redux/auth';
import СreatingSprint from './СreatingSprint/СreatingSprint.js';
import NameInputEdit from './NameInputEdit/NameInputEdit';
import СreatingPeopleItem from './AddPeopleItem/CreatingPeopleItem';

import СreatingProject from '../projects/СreatingProject';

import SprintsItem from './SprintsItem';
import AddPeople from './AddPeopleItem/PeopleItem';
import PeopleModal from '../modals/PeopleModal';
import SprintsDelete from './SprintsDelete/SprintsDelete';
import Modal from '../modals';
import Sidebar from '../Sidebar';
import s from './sprints.module.scss';
import style from '../modals/Modal.module.scss';

import Container from '../Container';

import Message from '../Message';

const Sprint = ({ toggleModal, showModal, deleteSprint, deleteSprints }) => {
  const dispatch = useDispatch();

  const deleteTeammate = id =>
    dispatch(projectsOperations.deletePerson(id, idProject));
  const history = useHistory();
  const getState = history.location.state;
  const compareWithPathName = history.location.pathname.slice(10);
  const getStorageData = localStorage.getItem('persist:token');
  const token = JSON.parse(getStorageData).token;
  const sprints = useSelector(sprintsSelectors.getSprints);
  const teammates = useSelector(projectsSelectors.getProjects);
  const userId = useSelector(authSelectors.getUserId);

  const projects = useSelector(projectsSelectors.getProjects);
  const idProject = history.location.state;

  const projectId = history.location.state;
  const currentProject = projects.find(project => project._id === projectId);
  const addSprints = id => history.push(`/projects/${projectId}/${id}`, id);

  const [addPeopleModal, setAddPeopleModal] = useState(false);

  const editName = inputProjectName =>
    dispatch(
      projectsOperations.editProjectName(currentProject?._id, inputProjectName),
    );
  const togglePeopleModal = useCallback(() => {
    setAddPeopleModal(prevShowModal => !prevShowModal);
  }, []);

  useEffect(() => {
    dispatch(sprintsOperations.getSprints(projectId));
  }, [dispatch, projectId]);

  useEffect(() => {
    dispatch(projectsOperations.getProjects());
  }, [dispatch]);

  useEffect(() => {
    if (compareWithPathName !== getState && !token) {
      history.push('/register');
    }
  }, [compareWithPathName, getState, history, token]);

  const transitiontoProject = id => history.push(`/projects/${id}`, id);

  return (
    <Container>
      <div className={s.project_wrapper}>
        <Sidebar
          projectId={projectId}
          data={projects}
          link={`/projects`}
          transition={transitiontoProject}
          type="project"
          Creating={СreatingProject}
          activeItemId={projectId}
        />
        <div className={s.sprints}>
          <div className={s.sprints_btn}>
            <NameInputEdit
              currItemName={currentProject?.name}
              editName={editName}
              owner={currentProject?.owner === userId}
            />
            {userId === currentProject?.owner && (
              <label className={s.btnWrapper}>
                <button
                  className={s.btn}
                  type="button"
                  onClick={toggleModal}
                ></button>
                <p className={s.text}>Create a sprint</p>
              </label>
            )}

            {userId === currentProject?.owner && (
              <AddPeople toggleModal={togglePeopleModal} />
            )}
          </div>
          {sprints.length === 0 ? <Message type="sprints" /> : null}
          <SprintsItem
            sprints={sprints}
            to={addSprints}
            del={deleteSprint}
            owner={currentProject?.owner === userId}
          />
        </div>

        <CSSTransition
          in={showModal}
          timeout={400}
          classNames={{
            enter: style.displayEnter,
            enterActive: style.displayEnterActive,
            exit: style.displayExit,
            exitActive: style.displayExitActive,
          }}
          unmountOnExit
        >
          <Modal onClose={toggleModal}>
            <СreatingSprint onSave={toggleModal} prId={projectId} />
          </Modal>
        </CSSTransition>
        <CSSTransition
          in={addPeopleModal}
          timeout={400}
          classNames={{
            enter: style.displayEnter,
            enterActive: style.displayEnterActive,
            exit: style.displayExit,
            exitActive: style.displayExitActive,
          }}
          unmountOnExit
        >
          <PeopleModal onClose={togglePeopleModal}>
            <СreatingPeopleItem
              teammates={teammates}
              del={deleteTeammate}
              onSave={toggleModal}
              ArrayTeammate={idProject}
            />
          </PeopleModal>
        </CSSTransition>

        {sprints?.length > 0 ? (
          <SprintsDelete
            sprints={sprints}
            delAll={deleteSprints}
            prId={projectId}
          />
        ) : null}
      </div>
    </Container>
  );
};

export default Sprint;
