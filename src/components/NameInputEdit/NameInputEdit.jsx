import React, { useState, useEffect } from 'react';
import { projectsOperations } from '../../redux/projects';
import { useDispatch } from 'react-redux';
import s from './NameInputEdit.module.scss';

const NameInputEdit = ({ data, itemId }) => {
  const dispatch = useDispatch();
  const currentProject = data.find(project => project._id === itemId);
  const [inputProjectName, setInputProject] = useState(currentProject?.name);
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
    setInputProject(currentProject?.name);
  }, [currentProject?.name]);
  return (
    <>
      {!edit ? (
        <div className={s.project_tittle__wrapper}>
          <h2 className={s.project_tittle}> {currentProject?.name} </h2>
          <button
            onClick={handlerEdit}
            className={s.btn_project_change}
          ></button>
        </div>
      ) : (
        <div className={s.project_tittle__wrapper}>
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
        </div>
      )}
    </>
  );
};

export default NameInputEdit;
