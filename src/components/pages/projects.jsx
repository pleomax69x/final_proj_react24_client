import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { projectsOperations, projectsSelectors } from '../../redux/projects';
import Modal from '../Modal';
import СreatingProject from '../СreatingProject';
import ProjectCard from '../ProjectCard/ProjectCard';
import { useHistory } from 'react-router';
import Container from '../ContainerProjects';

const Projects = () => {
  const dispatch = useDispatch();
  const deleteProject = id => dispatch(projectsOperations.deleteProject(id));

  const history = useHistory();
  const transitiontoProject = id => history.push(`/projects/${id}`, id);

  const projects = useSelector(projectsSelectors.getProjects);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  useEffect(() => {
    dispatch(projectsOperations.getProjects());
  }, [dispatch]);

  return (
    <Container onClick={toggleModal}>
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
    </Container>
  );
};

export default Projects;
