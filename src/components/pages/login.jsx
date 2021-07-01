import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

import styles from './login.module.scss';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth/';

const schema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Wrong password'),
});

const createErrorMessage = error => {
  if (error.includes('401')) return 'Not valid login or password';
  if (error.includes('400')) return 'Bad request';
  if (error.includes('409')) return 'Provided email already exists';
  return 'Unknown error. Please try again';
};

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [notification, setNotification] = useState(false);
  // const [msg, setMsg] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = ({ email, password }, { resetForm, setSubmitting }) => {
    dispatch(authOperations.login({ email, password }));
    setSubmitting(false);
    resetForm();
  };

  const errorFromState = useSelector(state =>
    authSelectors.getErrorMessage(state),
  );

  const errorMessage = errorFromState
    ? createErrorMessage(errorFromState)
    : null;

  return (
    <div className={styles.wrapper}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form
            className={styles.form}
            autoComplete="off"
            onChange={handleChange}
          >
            <h1 className={styles.title}>Enter</h1>

            <label className={styles.label}>
              <Field
                type="text"
                name="email"
                placeholder=" "
                className={`${styles.input} ${
                  touched.email && errors.email && styles.errorInput
                }`}
              />
              <p className={styles.name}>Email</p>
              {touched.email && errors.email && (
                <div className={styles.error}>{errors.email}</div>
              )}
            </label>

            <label className={styles.label}>
              <Field
                type="password"
                name="password"
                placeholder=" "
                className={`${styles.input} ${
                  touched.password && errors.password && styles.errorInput
                }`}
              />
              <p className={styles.name}>Password </p>
              {touched.password && errors.password && (
                <div className={styles.error}>{errors.password}</div>
              )}
            </label>
            <div className={styles.wr}>
              {errorMessage ? (
                <div className={styles.errorMessage}>{errorMessage}</div>
              ) : null}
            </div>
            <button className={styles.btn} type="submit">
              Enter
            </button>
            <div className={styles.wrap}>
              <p className={styles.descr}> No account? </p>
              <Link to="/register" className={styles.descript}>
                Register
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
