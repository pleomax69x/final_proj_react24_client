import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import { projectsOperations, projectsSelectors } from '../../redux/projects';
import { errorSelectors } from '../../redux/error';
import s from './СreatingProject.module.scss';

const schema = yup.object({
  name: yup
    .string('Enter a name')
    .min(3, 'Name should contains at least 3 characters')
    .required('Name is required'),
  desc: yup
    .string('Enter your description')
    .min(5, 'Description should contains at least 5 characters')
    .required('Description is required'),
});

const createErrorMessage = error => {
  if (error.includes('400')) return 'Bad request. Please try again';
  if (error.includes('401')) return 'User not authorized';
  return 'Unknown error. Please try again';
};

const СreatingProject = ({ onSave }) => {
  // eslint-disable-next-line
  const [name, setName] = useState('');
  // eslint-disable-next-line
  const [desc, setDesc] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'desc':
        return setDesc(value);
      default:
        return;
    }
  };

  const projects = useSelector(projectsSelectors.getProjects);
  const dispatch = useDispatch();

  const errorFromState = useSelector(errorSelectors);

  let errorMessage = errorFromState ? createErrorMessage(errorFromState) : null;

  const handleSubmit = ({ name, desc }, { resetForm, setSubmitting }) => {
    if (projects.some(project => project.name === name)) {
      return (errorMessage = `Name "${name}" already exists, please enter another name.`);
    } else dispatch(projectsOperations.addProject(name, desc));

    setSubmitting(false);
    resetForm();

    // console.log(name, desc);
    onSave();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        desc: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className={s.project_form} onChange={handleChange}>
          <h2 className={s.form_title}>Сreating a project</h2>
          <div className={s.form_field}>
            <Field
              className={`${s.form_input} ${
                touched.name && errors.name && s.errorInput
              }`}
              type="text"
              name="name"
              placeholder=" "
            />
            <label className={s.form_lable}>Project name</label>
            {touched.name && errors.name && (
              <div className={s.error}>{errors.name}</div>
            )}
          </div>
          <div className={s.form_field}>
            <Field
              className={`${s.form_input} ${
                touched.desc && errors.desc && s.errorInput
              }`}
              type="text"
              name="desc"
              placeholder=" "
            />
            <label className={s.form_lable}>Description</label>
            {touched.desc && errors.desc && (
              <div className={s.error}>{errors.desc}</div>
            )}
          </div>
          <div className={s.wr}>
            {errorMessage ? (
              <div className={s.errorMessage}>{errorMessage}</div>
            ) : null}
          </div>
          <button type="submit" className={s.btn_submit}>
            Ready
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default СreatingProject;

//   /* <form className={s.project_form} onSubmit={handleSubmit}>
// <h2 className={s.form_title}>Сreating a project</h2>
// <div className={s.form_field}>
//   <input
//     className={s.form_input}
//     type="text"
//     name="name"
//     placeholder=" "
//     value={name}
//     onChange={setPrName}
//   />
//   <label className={s.form_lable}>Project name</label>
// </div>
// <div className={s.form_field}>
//   <input
//     className={s.form_input}
//     type="text"
//     name="title"
//     placeholder=" "
//     value={desc}
//     onChange={setPrDesc}
//   />
//   <label className={s.form_lable}>Description</label>
// </div>
// <button className={s.btn_submit}>Ready</button>
// </form> */
