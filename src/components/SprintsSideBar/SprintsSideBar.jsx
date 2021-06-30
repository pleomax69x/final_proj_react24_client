import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { sprintsSelectors } from '../../redux/sprints';
import routes from '../../routes';

import styles from './SprintsSideBar.module.scss';

const SprintsSideBar = ({ projectID }) => {
  const [currentSprintId, setCurrentSprintId] = useState('1');

  const updCurrentSprintId = e => {
    setCurrentSprintId(e.target.dataset.sprint);
  };

  const fakeSprints = [
    {
      id: '1',
      name: 'Sprint1',
    },
    {
      id: '2',
      name: 'Sprint2',
    },
    {
      id: '3',
      name: 'Sprint3',
    },
    {
      id: '4',
      name: 'Really long sprint name',
    },
    {
      id: '5',
      name: 'The longest sprint name you can imagine',
    },
  ];

  const getClassName = (stateId, itemId) => {
    return stateId === itemId
      ? [styles.sprintItem, styles.sprintItemCurrent].join(' ')
      : styles.sprintItem;
  };

  const sprints = useSelector(state => sprintsSelectors.getSprints(state));
  const history = useHistory();

  const handleGoBack = () => {
    return history.push(routes.projects);
  };

  return (
    <div className={styles.sideBarContainer}>
      <button className={styles.backButton} onClick={handleGoBack}>
        Show projects
      </button>
      <ul className={styles.sprintsList}>
        {fakeSprints.map(sprint => (
          <li
            key={sprint.id}
            className={getClassName(currentSprintId, sprint.id)}
            onClick={updCurrentSprintId}
          >
            <Link
              to={`/projects/${projectID}/sprints/${sprint.id}`}
              className={styles.sprintLink}
              data-sprint={sprint.id}
            >
              {sprint.name}
            </Link>
          </li>
        ))}
      </ul>
      <button className={styles.addSprintButton}>Create a sprint</button>
    </div>
  );
};

export default SprintsSideBar;
