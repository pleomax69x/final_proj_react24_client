import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router';
import { sprintsSelectors, sprintsOperations } from '../../redux/sprints';
import СreatingSprint from '../СreatingSprint';
import SprintsItem from '../SprintsItem';
import Modal from '../Modal';

const Sprint = () => {
  const sprints = useSelector(sprintsSelectors.getSprints);

  const dispatch = useDispatch();

  const deleteSprint = id => dispatch(sprintsOperations.deleteSprint(id));

  useEffect(() => {
    dispatch(sprintsOperations.getSprints());
  }, [dispatch]);

  const location = useLocation();

  const history = useHistory();
  const addSprints = id => history.push(`/sprints/${id}`, id);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  return (
    <div>
      <h1>Sprints</h1>
      <button type="button" onClick={toggleModal}>
        Сreat sprint
      </button>
      <ul>
        {sprints.map(sprints => (
          <SprintsItem
            key={sprints.id}
            title={sprints.title}
            date={sprints.date}
            duration={sprints.duration}
            to={() => addSprints(sprints.id)}
            onClick={() => deleteSprint(sprints.id)}
          />
        ))}
      </ul>

      {showModal && (
        <Modal onClose={toggleModal}>
          <СreatingSprint onSave={toggleModal} prId={location.state} />
        </Modal>
      )}
    </div>
  );
};

export default Sprint;

// ============ СreatingProject
// import React, { useState, useCallback } from 'react';
// import СreatingProject from '../СreatingProject';
// import Modal from '../Modal';

// const Project = () => {
//   const [showModal, setShowModal] = useState(false);

//   const toggleModal = useCallback(() => {
//     setShowModal(prevShowModal => !prevShowModal);
//   }, []);

//   return (
//     <div>
//       <h1>Project</h1>
//       <button type="button" onClick={toggleModal}>
//         Сreat project
//       </button>

//       {showModal && (
//         <Modal onClose={toggleModal}>
//           <СreatingProject onSave={toggleModal} />
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default Project;
