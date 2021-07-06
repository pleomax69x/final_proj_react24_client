import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import { sprintsOperations, sprintsSelectors } from '../../redux/sprints';
import { errorSelectors } from '../../redux/error';
import currentDate from '../../helpers/currentDate';
import sprintData from '../../helpers/sprintData';
import s from './СreatingSprint.module.scss';

const schema = yup.object({
  name: yup
    .string('Enter a name')
    .min(5, 'Name should contains at least 5 characters')
    .required('Name is required'),
  number: yup
    .number('Enter duration')
    .positive('Duration should be positive number')
    .required('Duration is required'),
});

const createErrorMessage = error => {
  console.log('createErrorMessage', error);
  if (error.includes('400')) return 'Bad request. Please try again';
  if (error.includes('401')) return 'User not authorized';
  return 'Unknown error. Please try again';
};

const СreatingSprint = ({ onSave, prId }) => {
  const dispatch = useDispatch();

  const sprints = useSelector(sprintsSelectors.getSprints);

  const errorFromState = useSelector(errorSelectors);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [data, setDate] = useState('');
  const updateDate = e => {
    setDate(e.target.value);
  };

  useEffect(() => {
    setDate(currentDate);
  }, []);

  const handleValueChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  let errorMessage = errorFromState ? createErrorMessage(errorFromState) : null;

  const handleSubmit = ({ name, number }, { resetForm, setSubmitting }) => {
    const listOfDates = sprintData(data, number);

    if (sprints.length > 0 && sprints.some(sprint => sprint.title === name)) {
      return (errorMessage = `Name "${name}" already exists, please enter another name.`);

    } else
      dispatch(
        sprintsOperations.addSprint(prId, name, data, number, listOfDates),
      );


    setSubmitting(false);
    resetForm();

    console.log(prId, name, data, number, listOfDates);

    onSave();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        data: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className={s.sprint_form} onChange={handleValueChange}>
          <h2 className={s.form_title}>Creating a sprint</h2>
          <div className={s.form_field}>
            <Field
              className={`${s.form_input} ${
                touched.name && errors.name && s.errorInput
              }`}
              type="text"
              name="name"
              placeholder=" "
            />
            <label className={s.form_lable}>The name of the sprint</label>
            {touched.name && errors.name && (
              <div className={s.error}>{errors.name}</div>
            )}
          </div>
          <div className={s.form_field}>
            <Field
              className={`${s.form_input} ${
                touched.name && errors.name && s.errorInput
              }`}
              type="date"
              name="date"
              placeholder=" "
              value={data}
              onChange={updateDate}
            />
            <label className={s.form_lable}>Start date</label>
          </div>
          <div className={s.form_field}>
            <Field
              className={`${s.form_input} ${
                touched.name && errors.name && s.errorInput
              }`}
              type="text"
              name="number"
              placeholder=" "
            />
            <label className={s.form_lable}>Duration</label>
            {touched.number && errors.number && (
              <div className={s.error}>{errors.number}</div>
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

export default СreatingSprint;

// <form className={s.sprint_form} onSubmit={handleSubmit}>
// <h2 className={s.form_title}>Creating a sprint</h2>
// <div className={s.form_field}>
//   <input
//     className={s.form_input}
//     type="text"
//     name="name"
//     placeholder=" "
//     value={name}
//     onChange={setName}
//   />
//   <label className={s.form_lable}>The name of the sprint</label>
// </div>
// <div className={s.form_field}>
//   <input
//     className={s.form_input}
//     type="date"
//     name="date"
//     placeholder=" "
//     value={data}
//     onChange={updateDate}
//   />
//   <label className={s.form_lable}>Start date</label>
// </div>
// <div className={s.form_field}>
//   <input
//     className={s.form_input}
//     type="text"
//     name="duration"
//     placeholder=" "
//     value={number}
//     onChange={updateNumber}
//   />
//   <label className={s.form_lable}>Duration</label>
// </div>
// <button className={s.btn_submit}>Ready</button>
// </form>
