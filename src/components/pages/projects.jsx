import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { projectsOperations, projectsSelectors } from '../../redux/projects';
import Modal from '../Modal';
import СreatingProject from '../СreatingProject';
import ProjectCard from '../ProjectCard/ProjectCard';
import { useHistory } from 'react-router';
import ContainerProjects from '../ContainerProjects';
import ProjectsDelete from '../ProjectsDelete';

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
  // console.log('history', history);

  useEffect(() => {
    !token && history.push('/register');
  }, [history, token]);
  return (
    <ContainerProjects onClick={toggleModal}>
      <ProjectCard
        projects={projects}
        to={transitiontoProject}
        del={deleteProject}
      />

      {showModal && (
        <Modal onClose={toggleModal}>
          <СreatingProject onSave={toggleModal} />
        </Modal>
      )}

      <ProjectsDelete projects={projects} delAll={deleteProjects} />
    </ContainerProjects>
  );
};

export default Projects;
