import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import { tasksOperations } from '../../../redux/tasks';
import { errorSelectors } from '../../../redux/error';
import s from './СreatingTask.module.scss';

const schema = yup.object({
  name: yup
    .string('Enter a name')
    .min(5, 'Name should contains at least 5 characters')
    .required('Name is required'),
  hours: yup
    .number('Enter hours')
    .positive('Hours should be positive number')
    .required('Hours is required'),
});

const createErrorMessage = error => {
  console.log('createErrorMessage', error);
  if (error.includes('400')) return 'Bad request. Please try again';
  if (error.includes('401')) return 'User not authorized';
  return 'Unknown error. Please try again';
};

const СreatingTask = ({ onSave, sprintId }) => {
  const dispatch = useDispatch();
  // const tasks = useSelector(tasksSelectors.getTasks);
  const errorFromState = useSelector(errorSelectors);
  // eslint-disable-next-line
  const [name, setName] = useState('');
  // eslint-disable-next-line
  const [hours, setHours] = useState('');

  const handleValueChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'hours':
        return setHours(value);
      default:
        return;
    }
  };

  let errorMessage = errorFromState ? createErrorMessage(errorFromState) : null;

  const handleSubmit = ({ name, hours }, { resetForm, setSubmitting }) => {
    // if (tasks.some(tasks => tasks.name === name)) {
    //   return alert(
    //     `Name "${name}" already exists, please enter another name.`,
    //   );
    // } else
    dispatch(tasksOperations.addTask(sprintId, name, hours));

    setSubmitting(false);
    resetForm();

    // console.log(name, hours, tasks);

    onSave();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        hours: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className={s.tasks_form} onChange={handleValueChange}>
          <h2 className={s.form_title}>Сreating a task</h2>
          <div className={s.form_field}>
            <Field
              className={`${s.form_input} ${
                touched.name && errors.name && s.errorInput
              }`}
              type="text"
              name="name"
              placeholder=" "
            />
            <label className={s.form_lable}>Tasks name</label>
            {touched.name && errors.name && (
              <div className={s.error}>{errors.name}</div>
            )}
          </div>
          <div className={s.form_field}>
            <Field
              className={`${s.form_input} ${
                touched.name && errors.name && s.errorInput
              }`}
              type="text"
              name="hours"
              placeholder=" "
            />
            <label className={s.form_lable}>Scheduled hours</label>
            {touched.name && errors.hours && (
              <div className={s.error}>{errors.hours}</div>
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

export default СreatingTask;

// <form className={s.tasks_form} onSubmit={handleSubmit}>
//       <h2 className={s.form_title}>Сreating a task</h2>
//       <div className={s.form_field}>
//         <input
//           className={s.form_input}
//           type="text"
//           name="name"
//           placeholder=" "
//           value={name}
//           onChange={handleTaskName}
//         />
//         <label className={s.form_lable}>Tasks name</label>
//       </div>
//       <div className={s.form_field}>
//         <input
//           className={s.form_input}
//           type="text"
//           name="hours"
//           placeholder=" "
//           value={hours}
//           onChange={handleHours}
//         />
//         <label className={s.form_lable}>Scheduled hours</label>
//       </div>
//       <button className={s.btn_submit}>Ready</button>
//     </form>
