import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import authSelectors from '../../../redux/auth/auth-selectors';
import { sprintsOperations } from '../../../redux/sprints';
import Modal from '../../modals';
import s from './SprintsDelete.module.scss';
import style from '../../modals/Modal.module.scss';

const SprintsDelete = ({ sprints, delAll, prId }) => {
  const dispatch = useDispatch();

  const userId = useSelector(authSelectors.getUserId);

  const isOwner = sprints?.every(sprint => sprint.projectOwnerId === userId);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  const handleDelete = () => {
    delAll(prId);
    setTimeout(() => {
      dispatch(sprintsOperations.getSprints(prId));
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
          <div className={s.modal_delete}>
            <h2 className={s.title}>Delete all sprints</h2>
            <p className={s.text}>
              Are you sure, you want to delete all sprints?
            </p>
            <button
              className={s.modal_btnDel}
              type="button"
              onClick={handleDelete}
            ></button>
            <p className={s.textBtn}>Delete all</p>
          </div>
        </Modal>
      </CSSTransition>
    </div>
  );
};

export default SprintsDelete;
