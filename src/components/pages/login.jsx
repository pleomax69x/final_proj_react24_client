import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

import styles from './login.module.scss';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth/';

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

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
                // value="password"
                className={`${styles.input} ${
                  touched.password && errors.password && styles.errorInput
                }`}
              />
              <p className={styles.name}>Password </p>
              {touched.password && errors.password && (
                <div className={styles.error}>{errors.password}</div>
              )}
            </label>

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

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';
// import { Formik, Field, Form } from 'formik';
// import * as yup from 'yup';
// import Container from '../Container/Container';

// import styles from './login.module.scss';

// const schema = yup.object({
//   email: yup
//     .string('Enter your email')
//     .email('Enter a valid email')
//     .required('Email is required'),
//   password: yup
//     .string('Enter your password')
//     .min(8, 'Password should be of minimum 8 characters length')
//     .required('Wrong password'),
// });

// const Login = () => (
//   <div className={styles.wrapper}>
//     <Container>
//       <Formik
//         initialValues={{
//           email: '',
//           password: '',
//         }}
//         validationSchema={schema}
//         onSubmit={async values => {
//           await new Promise(r => setTimeout(r, 500));
//           alert(JSON.stringify(values, null, 2));
//         }}
//       >
//         {({ errors, touched }) => (
//           <Form className={styles.form} autoComplete="off">
//             <h1 className={styles.title}>Enter</h1>

//             <label className={styles.label}>
//               <Field
//                 type="text"
//                 name="email"
//                 placeholder=" "
//                 className={`${styles.input} ${
//                   touched.email && errors.email && styles.errorInput
//                 }`}
//               />
//               <p className={styles.name}>Email</p>
//               {touched.email && errors.email && (
//                 <div className={styles.error}>{errors.email}</div>
//               )}
//             </label>

//             <label className={styles.label}>
//               <Field
//                 type="password"
//                 name="password"
//                 placeholder=" "
//                 className={`${styles.input} ${
//                   touched.password && errors.password && styles.errorInput
//                 }`}
//               />
//               <p className={styles.name}>Password </p>
//               {touched.password && errors.password && (
//                 <div className={styles.error}>{errors.password}</div>
//               )}
//             </label>

//             <button className={styles.btn} type="submit">
//               Enter
//             </button>
//             <p className={styles.descr}> No account? </p>
//             <Link to="/register" className={styles.descr}>
//               Register
//             </Link>
//           </Form>
//         )}
//       </Formik>
//     </Container>
//   </div>
// );

// export default Login;
