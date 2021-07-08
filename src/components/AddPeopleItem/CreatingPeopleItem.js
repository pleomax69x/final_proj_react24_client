import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import { errorSelectors } from '../../redux/error';
// import authOperations from '../../redux/peopleAdd/people-operations';
import s from '../СreatingSprint/СreatingSprint.module.scss';
import PeopleList from './PeopleList.jsx';

import operations from '../../redux/peopleAdd/people-operations';
const { addTeammate } = operations;
const schema = yup.object({
  email: yup
    .string()
    .email('Must be an email address')
    .min(8, 'Too short!')
    .required('Required'),
});

const createErrorMessage = error => {
  console.log('createErrorMessage', error);
  if (error.includes('400')) return 'Bad request. Please try again';
  if (error.includes('401')) return 'User not authorized';
  return 'Unknown error. Please try again';
};

const СreatingPeopleItem = ({ teammate }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const errorFromState = useSelector(errorSelectors);
  let history = useHistory();
  console.log('history', history.location.state);
  const projectId = history.location.state;
  const handleValueChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        return setEmail(value);
      default:
        return;
    }
  };
  console.log(teammate, 'teammate');
  let errorMessage = errorFromState ? createErrorMessage(errorFromState) : null;
  // const onSubmit = email => dispatch(authOperations.addTeammate({ email }));
  const handleSubmit = ({ email }, { resetForm, setSubmitting }) => {
    console.log('testId and email', projectId, email);
    dispatch(addTeammate(projectId, email));
    setSubmitting(false);
    resetForm();
    reset();
  };

  const reset = () => {
    setEmail('');
  };
  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className={s.sprint_form} onChange={handleValueChange}>
          <h2 className={s.form_title}>Add people</h2>
          <div className={s.form_field}>
            <Field
              className={`${s.form_input} ${
                touched.name && errors.name && s.errorInput
              }`}
              type="email"
              name="email"
              placeholder=" "
            />
            <label className={s.form_lable}>Enter e-mail</label>
            {touched.email && errors.email && (
              <div className={s.error}>{errors.email}</div>
            )}
          </div>
          <p>Added users:</p>
          <PeopleList teammate={teammate} />
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

export default СreatingPeopleItem;
