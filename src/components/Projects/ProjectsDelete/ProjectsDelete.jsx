import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { projectsOperations } from '../../../redux/projects';
import authSelectors from '../../../redux/auth/auth-selectors';
import Modal from '../../Modal';
import s from './ProjectsDelete.module.scss';

const ProjectsDelete = ({ projects, delAll }) => {
  const dispatch = useDispatch();

  const userId = useSelector(authSelectors.getUserId);

  const isOwner = projects?.every(project => project.owner === userId);
  console.log('isOwner:', isOwner);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  const handleDelete = () => {
    delAll();
    setTimeout(() => {
      dispatch(projectsOperations.getProjects());
    }, 500);
    toggleModal();
  };

  return (
    <div>
      {isOwner && (
        <div className={s.btnWrapper}>
          <button
            className={s.btnDel}
            type="button"
            onClick={toggleModal}
          ></button>
          <p className={s.textDell}>Delete all</p>
        </div>
      )}

      {showModal && (
        <Modal onClose={toggleModal}>
          <div className={s.modal_delete}>
            <h2 className={s.title}>Delete all projects</h2>
            <p className={s.text}>
              Are you sure, you want to delete all projects?
            </p>
            <button
              className={s.modal_btnDel}
              type="button"
              onClick={handleDelete}
            ></button>
            <p className={s.textBtn}>Delete all</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProjectsDelete;
