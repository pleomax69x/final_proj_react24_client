import React, { useState, useCallback } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './SidebarSprints.module.scss';
import СreatingProject from '../СreatingProject/СreatingProject';
import Modal from '../Modal';

const Sidebar = ({ data, to }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);
  return (
    <div className={styles.wrapper}>
      <Link to="/projects" className={styles.linkProjects}>
        Show projects
      </Link>
      <ul className={styles.list}>
        {data.map(item => (
          <li
            key={item._id}
            className={styles.listItem}
            onClick={() => to(item._id)}
          >
            <NavLink
              to={`/projects/${item._id}`}
              className={styles.itemLink}
              activeClassName={styles.linkProjectsActive}
            >
              <h2>{item.name}</h2>
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
        <p className={styles.text}>Create a project</p>
      </div>
      {showModal && (
        <Modal onClose={toggleModal}>
          <СreatingProject onSave={toggleModal} />
        </Modal>
      )}
    </div>
  );
};

export default Sidebar;
