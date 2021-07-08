import React, { useState, useCallback } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import Modal from '../Modal';

const Sidebar = ({
  projectId,
  activeItemId,
  data,
  link,
  transition,
  type,
  Creating,
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
      <div className={styles.btnWrapper}>
        <button
          type="button"
          className={styles.btn}
          onClick={toggleModal}
        ></button>
        <p className={styles.text}>Create a {type}</p>
      </div>
      {showModal && (
        <Modal onClose={toggleModal}>
          <Creating onSave={toggleModal} prId={projectId} />
        </Modal>
      )}
    </div>
  );
};

export default Sidebar;
