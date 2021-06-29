import s from './СreatingProject.module.scss';

const СreatingProject = () => {
  return (
    <form className={s.project_form}>
      <h2 className={s.form_title}>Сreating a project</h2>
      <div className={s.form_field}>
        <input
          className={s.form_input}
          type="text"
          name="title"
          placeholder=" "
        />
        <label className={s.form_lable}>Project name</label>
      </div>
      <div className={s.form_field}>
        <input
          className={s.form_input}
          type="text"
          name="title"
          placeholder=" "
        />
        <label className={s.form_lable}>Description</label>
      </div>
    </form>
  );
};

export default СreatingProject;
