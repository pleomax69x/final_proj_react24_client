import s from './СreatingProject.module.css';

const СreatingProject = () => {
  return (
    <form className={s.project_form}>
      <h2 className={s.project_form_title}>Сreating a project</h2>
      <div className={s.project_form_div}>
        <label className={s.form_lable}>
          <span className={s.project_form_lable}>Project name</span>
          <input
            className={s.project_form_input}
            type="text"
            name="title"
            placeholder=" "
          />
        </label>
      </div>
      <div className={s.project_form_div}>
        <label className={s.form_lable}>
          <span className={s.project_form_lable}>Description</span>
          <input
            className={s.project_form_input}
            type="text"
            name="title"
            placeholder=" "
          />
        </label>
      </div>
    </form>
  );
};

export default СreatingProject;
