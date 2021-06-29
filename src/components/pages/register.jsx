import { useCallback } from 'react';
import s from '../../sass/utils/main.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import LeftEllipses from '../../images/registerImg/LeftEllipses';
import RightWhiteEllipse from '../../images/registerImg/RightWhiteEllipse';
import RightOrangeEllipse from '../../images/registerImg/RightOrangeEllipse';
import { useFormik, Formik, Form } from 'formik';
import * as Yup from 'yup';
import Error from './Error';
import { authOperations, authSelectors } from '../../redux/auth';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be an email address')
    .min(8, 'Too short!')
    .required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /[A-Z]\w+/,
      'Only Latin letters are allowed. At list one Uppercase is required.',
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords do not match',
  ),
});

const createErrorMessage = code => {
  switch (Number(code)) {
    case 400:
      return 'Not valid password';
    case 409:
      return 'Provided email already exists';
    default:
      return null;
  }
};

const Register = () => {
  const dispatch = useDispatch();

  const sendData = useCallback(
    (email, password) => dispatch(authOperations.register({ email, password })),
    [dispatch],
  );

  const errorCode = useSelector(state => authSelectors.getErrorCode(state));

  const errorMessage = createErrorMessage(errorCode);
  console.log('errorMessage', errorCode, errorMessage);
  return (
    <>
      <div className={s.leftEllipse}>
        <LeftEllipses />
      </div>
      <div className={s.rightWhiteEllipse}>
        <RightWhiteEllipse />
      </div>
      <div className={s.rightOrangeEllipse}>
        <RightOrangeEllipse />
      </div>
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
              <div className={s.formField}>
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={
                    touched.email && errors.email ? s.inputError : s.inputForm
                  }
                />
                <label className={s.formLabel}>E-mail</label>
                <Error touched={touched.email} message={errors.email} />
              </div>
              <div className={s.formField}>
                <input
                  type="password"
                  name="password"
                  placeholder=" "
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={
                    touched.password && errors.password
                      ? s.inputError
                      : s.inputForm
                  }
                />
                <label className={s.formLabel}>Password</label>
                <Error touched={touched.password} message={errors.password} />
              </div>
              <div className={s.formField}>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder=" "
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  className={
                    touched.confirmPassword && errors.confirmPassword
                      ? s.inputError
                      : s.inputForm
                  }
                />
                <label className={s.formLabel}>Repeat password</label>
                <Error
                  touched={touched.confirmPassword}
                  message={errors.confirmPassword}
                />
              </div>
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
                <span className={s.regSpan}>Log in</span>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Register;

{
  /* <form name="signupForm" autoComplete="on" className={s.registerForm}>
<h1 className={s.registerTitle}>Registration</h1>
<div className={s.formGroup}>
  <div className={s.formField}>
    <input
      type="email"
      name="email"
      placeholder=" "
      className={s.inputForm}
    />
    <label for="email" className={s.formLabel}>
      E-mail
    </label>
  </div>
  <div className={s.formField}>
    <input
      type="password"
      name="password"
      placeholder="Password"
      placeholder=" "
      className={s.inputForm}
    />
    <label for="email" className={s.formLabel}>
      Password
    </label>
  </div>
  <div className={s.formField}>
    <input
      type="password"
      name="password"
      placeholder=" "
      className={s.inputForm}
    />
    <label for="email" className={s.formLabel}>
      Repeat password
    </label>
  </div>
</div>
<div className={s.regFormBtn}>
  <button type="submit" className={s.formBtn}>
    Register
  </button>
  <div className={s.toLogin}>
    Do you have an account?
    <span className={s.regSpan}>Log in</span>
  </div>
</div>
</form> */
}
