import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { projectsOperations, projectsSelectors } from '../redux/projects';
import Modal from '../components/Modal';
import СreatingProject from '../components/Projects/СreatingProject';
import ProjectCard from '../components/Projects/ProjectCard';
import { useHistory } from 'react-router';
import ContainerProjects from '../components/Projects/ContainerProjects';
import ProjectsDelete from '../components/Projects/ProjectsDelete';
import Message from '../components/Message';
import { CSSTransition } from 'react-transition-group';
import style from '../components/Modal/Modal.module.scss';

const Projects = () => {
  const dispatch = useDispatch();
  const deleteProject = id => dispatch(projectsOperations.deleteProject(id));
  const deleteProjects = () => dispatch(projectsOperations.deleteProjects());

  const history = useHistory();
  const transitiontoProject = id => history.push(`/projects/${id}`, id);

  const getStorageData = localStorage.getItem('persist:token');
  const token = JSON.parse(getStorageData).token;

  const projects = useSelector(projectsSelectors.getVisibleProjects);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  useEffect(() => {
    dispatch(projectsOperations.getProjects());
  }, [dispatch]);

  useEffect(() => {
    !token && history.push('/register');
  }, [history, token]);
  return (
    <ContainerProjects onClick={toggleModal}>
      {projects.length === 0 ? <Message type="projects" /> : null}
      <ProjectCard
        projects={projects}
        to={transitiontoProject}
        del={deleteProject}
      />

      <CSSTransition
        in={showModal}
        timeout={400}
        classNames={{
          enter: style.displayEnter,
          enterActive: style.displayEnterActive,
          exit: style.displayExit,
          exitActive: style.displayExitActive,
        }}
        mountOnEnter
        unmountOnExit
      >
        <Modal onClose={toggleModal}>
          <СreatingProject onSave={toggleModal} />
        </Modal>
      </CSSTransition>
      {projects.length > 0 ? (
        <ProjectsDelete projects={projects} delAll={deleteProjects} />
      ) : null}
    </ContainerProjects>
  );
};

export default Projects;
