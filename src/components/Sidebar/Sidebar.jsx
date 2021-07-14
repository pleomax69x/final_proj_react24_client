import React, { useState, useCallback } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import styles from './Sidebar.module.scss';
import Modal from '../modals';
import style from '../modals/Modal.module.scss';

const Sidebar = ({
  projectId,
  activeItemId,
  data,
  link,
  transition,
  type,
  Creating,
  owner,
}) => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  const goBackHandle = () => {
    history.push(link, projectId);
  };

  return (
    <div className={styles.wrapper}>
      <button to={link} className={styles.goBackButton} onClick={goBackHandle}>
        Show {`${type}s`}
      </button>
      <ul className={styles.list}>
        {data.map(item => (
          <li
            key={item._id}
            className={styles.listItem}
            onClick={() => transition(item._id)}
          >
            <NavLink
              to={`/projects/${item._id}`}
              className={
                activeItemId === item._id
                  ? [styles.itemLink, styles.linkProjectsActive].join(' ')
                  : styles.itemLink
              }
            >
              <p>{type === 'sprint' ? item.title : item.name}</p>
            </NavLink>
          </li>
        ))}
      </ul>
      {owner && (
        <div className={styles.btnWrapper}>
          <button
            type="button"
            className={styles.btn}
            onClick={toggleModal}
          ></button>
          <p className={styles.text}>Create a {type}</p>
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
          <Creating onSave={toggleModal} prId={projectId} />
        </Modal>
      </CSSTransition>
    </div>
  );
};

export default Sidebar;
