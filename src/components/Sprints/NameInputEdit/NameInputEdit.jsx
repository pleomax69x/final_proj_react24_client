import React, { useState, useEffect } from 'react';
import s from './NameInputEdit.module.scss';

const NameInputEdit = ({ currItemName, editName }) => {
  const [inputProjectName, setInputProject] = useState(currItemName);
  const [edit, setEdit] = useState(false);

  const handleChangeInputProject = e => setInputProject(e.currentTarget.value);
  const handlerEdit = () => {
    setEdit(true);
  };
  const handlerEditSave = () => {
    editName(inputProjectName);
    setEdit(false);
  };

  useEffect(() => {
    setInputProject(currItemName);
  }, [currItemName]);
  return (
    <>
      {!edit ? (
        <div className={s.project_tittle__wrapper}>
          <h2 className={s.project_tittle}> {currItemName} </h2>
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
