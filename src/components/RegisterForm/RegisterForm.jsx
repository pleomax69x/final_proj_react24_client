import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import s from './register.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';

import { authOperations } from '../../redux/auth';
import { errorSelectors } from '../../redux/error';
import Input from './Input';

const RegisterForm = ({ validationSchema, createErrorMessage }) => {
  const dispatch = useDispatch();

  const sendData = useCallback(
    (email, password) => dispatch(authOperations.register({ email, password })),
    [dispatch],
  );

  const errorFromState = useSelector(errorSelectors);

  const errorMessage = errorFromState
    ? createErrorMessage(errorFromState)
    : null;

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          const { email, password } = values;
          sendData(email, password);
        }}
        autoComplete="on"
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (
          <form
            name="signupForm"
            autoComplete="on"
            className={s.registerForm}
            onSubmit={handleSubmit}
          >
            <h1 className={s.registerTitle}>Registration</h1>
            <div className={s.formGroup}>
              <Input
                type="email"
                name="email"
                placeholder=" "
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                inputStyle={
                  touched.email && errors.email ? s.inputError : s.inputForm
                }
                labelStyle={s.formLabel}
                labelValue="E-mail"
                touched={touched.email}
                message={errors.email}
              />
              <Input
                type="password"
                name="password"
                placeholder=" "
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                inputStyle={
                  touched.password && errors.password
                    ? s.inputError
                    : s.inputForm
                }
                labelStyle={s.formLabel}
                labelValue="Password"
                touched={touched.password}
                message={errors.password}
              />
              <Input
                type="password"
                name="confirmPassword"
                placeholder=" "
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                inputStyle={
                  touched.confirmPassword && errors.confirmPassword
                    ? s.inputError
                    : s.inputForm
                }
                labelStyle={s.formLabel}
                labelValue="Repeat password"
                touched={touched.confirmPassword}
                message={errors.confirmPassword}
              />
            </div>
            <div className={s.regFormBtn}>
              {errorMessage ? (
                <div className={s.errorMessage}>{errorMessage}</div>
              ) : null}
              <button
                type="submit"
                className={s.formBtn}
                disabled={isSubmitting}
              >
                Register
              </button>
              <div className={s.toLogin}>
                Do you have an account?
                <Link to="/login" className={s.regSpan}>
                  Log in
                </Link>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
