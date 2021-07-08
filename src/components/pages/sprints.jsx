import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { sprintsSelectors, sprintsOperations } from '../../redux/sprints';
import { projectsOperations, projectsSelectors } from '../../redux/projects';
import СreatingSprint from '../СreatingSprint/СreatingSprint.js';
import СreatingProject from '../СreatingProject';
import SprintsItem from '../SprintsItem';
import Modal from '../Modal';
import Sidebar from '../Sidebar';

import s from './sprints.module.scss';

const Sprint = () => {
  const dispatch = useDispatch();
  const deleteSprint = id => dispatch(sprintsOperations.deleteSprint(id));

  const history = useHistory();
  const getState = history.location.state;
  const compareWithPathName = history.location.pathname.slice(10);
  const getStorageData = localStorage.getItem('persist:token');
  const token = JSON.parse(getStorageData).token;

  const sprints = useSelector(sprintsSelectors.getSprints);
  const projects = useSelector(projectsSelectors.getProjects);

  const projectId = history.location.state;
  const addSprints = id => history.push(`/projects/${projectId}/${id}`, id);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  const currentProject = projects.find(project => project._id === projectId);
  const [inputProjectName, setInputProject] = useState(currentProject.name);
  const [edit, setEdit] = useState(false);

  const handleChangeInputProject = e => setInputProject(e.currentTarget.value);

  const handlerEdit = () => {
    setEdit(true);
  };

  const handlerEditSave = () => {
    dispatch(
      projectsOperations.editProjectName(currentProject._id, inputProjectName),
    );
    setEdit(false);
  };
  useEffect(() => {
    setInputProject(currentProject.name);
    setEdit(false);
  }, [currentProject.name]);

  useEffect(() => {
    dispatch(sprintsOperations.getSprints(projectId));
  }, [dispatch, projectId]);
  useEffect(() => {
    dispatch(projectsOperations.getProjects());
  }, [dispatch]);

  useEffect(() => {
    if (compareWithPathName !== getState && !token) {
      history.push('/register');
    }
  }, [compareWithPathName, getState, history, token]);

  const transitiontoProject = id => history.push(`/projects/${id}`, id);
  console.log(projects);

  return (
    <div className={s.project_wrapper}>
      <Sidebar
        projectId={projectId}
        data={projects}
        link={`/projects`}
        transition={transitiontoProject}
        type="project"
        Creating={СreatingProject}
        activeItemId={projectId}
      />
      <div className={s.sprints}>
        <div className={s.sprints_btn}>
          <div className={s.projectEditWrapper}>
            {!edit ? (
              <label className={s.project_tittle__wrapper}>
                <h2 className={s.project_tittle}> {currentProject.name} </h2>
                <button
                  onClick={handlerEdit}
                  className={s.btn_project_change}
                ></button>
              </label>
            ) : (
              <label className={s.project_tittle__wrapper}>
                <input
                  className={s.inputField}
                  type="text"
                  name="name"
                  value={inputProjectName}
                  onChange={handleChangeInputProject}
                />
                <button
                  onClick={handlerEditSave}
                  type="button"
                  className={s.btn_save_change}
                ></button>
              </label>
            )}
          </div>
          <label className={s.btnWrapper}>
            <button
              className={s.btn}
              type="button"
              onClick={toggleModal}
            ></button>
            <p className={s.text}>Create a sprint</p>
          </label>

          <label className={s.btnWrapper_add}>
            <button className={s.addpeople}></button>
            <p className={s.text_add}>Add people</p>
          </label>
        </div>

        <SprintsItem sprints={sprints} to={addSprints} del={deleteSprint} />
      </div>
      {showModal && (
        <Modal onClose={toggleModal}>
          <СreatingSprint onSave={toggleModal} prId={projectId} />
        </Modal>
      )}
    </div>
  );
};

export default Sprint;
