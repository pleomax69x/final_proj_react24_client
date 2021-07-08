import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { sprintsOperations } from '../../redux/sprints';
import Modal from '../Modal';
import s from './SprintsDelete.module.scss';

const SprintsDelete = ({ sprints, delAll, prId }) => {
  const dispatch = useDispatch();

  // const ownerId = sprints?.map(sprint => sprint.owner);
  // console.log('ownerId:', ownerId[ownerId.length - 1]);
  // const firstId = sprints?.map(sprint => sprint.teammates[0].id);
  // console.log('firstId:', firstId[firstId.length - 1]);
  // const isOwner = ownerId === firstId;
  // console.log('isOwner', isOwner);

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
      {/* {isOwner && ( */}
      {true && (
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
      )}
    </div>
  );
};

export default SprintsDelete;
