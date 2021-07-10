import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import Input from './loginInput/Input';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth/';

import styles from './LoginForm.module.scss';

const LoginForm = ({ errorMessage, schema }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [email, setEmail] = useState('');
  // // eslint-disable-next-line
  const [password, setPassword] = useState('');

  const handleSubmit = ({ email, password }, { resetForm, setSubmitting }) => {
    dispatch(authOperations.login({ email, password }));
    setSubmitting(false);
    resetForm();
  };

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

            <Input
              name="email"
              type="text"
              placeholder=" "
              fieldStyle={`${styles.input} ${
                touched.email && errors.email && styles.errorInput
              }`}
              descrStyle={styles.name}
              value="E-mail"
              error={
                touched.email &&
                errors.email && (
                  <div className={styles.error}>{errors.email}</div>
                )
              }
            />
            <Input
              name="password"
              type="password"
              placeholder=" "
              fieldStyle={`${styles.input} ${
                touched.password && errors.password && styles.errorInput
              }`}
              descrStyle={styles.name}
              value="Password"
              error={
                touched.password &&
                errors.password && (
                  <div className={styles.error}>{errors.password}</div>
                )
              }
            />
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

export default LoginForm;
