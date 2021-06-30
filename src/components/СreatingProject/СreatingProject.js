import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import projectsOperations from '../../redux/projects/projects-operations';
import projectsSelectors from '../../redux/projects/projects-selectors';
import s from './СreatingProject.module.scss';

const СreatingProject = ({ onSave }) => {
  const [prName, setprName] = useState('');
  const setPrName = e => {
    setprName(e.target.value);
  };

  const [prDesc, setprDesc] = useState('');
  const setPrDesc = e => {
    setprDesc(e.target.value);
  };

  const projects = useSelector(projectsSelectors.getProjects);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    // if (projects.some(project => project.name === prName)) {
    //   return alert(
    //     `Name "${prName}" already exists, please enter another name.`,
    //   );
    // } else
    dispatch(projectsOperations.addProject(prName, prDesc));

    console.log(prName, prDesc);
    onSave();

    setprName('');
    setprDesc('');
  };

  return (
    <form className={s.project_form} onSubmit={handleSubmit}>
      <h2 className={s.form_title}>Сreating a project</h2>
      <div className={s.form_field}>
        <input
          className={s.form_input}
          type="text"
          name="name"
          placeholder=" "
          value={prName}
          onChange={setPrName}
        />
        <label className={s.form_lable}>Project name</label>
      </div>
      <div className={s.form_field}>
        <input
          className={s.form_input}
          type="text"
          name="title"
          placeholder=" "
          value={prDesc}
          onChange={setPrDesc}
        />
        <label className={s.form_lable}>Description</label>
      </div>
      <button className={s.btn_submit}>Ready</button>
    </form>
  );
};

export default СreatingProject;
