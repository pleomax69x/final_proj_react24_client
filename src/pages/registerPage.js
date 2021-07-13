import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import { errorActions } from '../redux/error';

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
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords do not match')
    .required('Please repeat your password.'),
});

const createErrorMessage = error => {
  console.log('createErrorMessage', error);
  if (error.includes('401')) return '';
  if (error.includes('400')) return 'Not valid password';
  if (error.includes('409')) return 'Provided email already exists';
  return 'Unknown error. Please try again';
};
const RegisterPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(errorActions.resetError());
  }, [dispatch]);
  return (
    <RegisterForm
      validationSchema={validationSchema}
      createErrorMessage={createErrorMessage}
    />
  );
};

export default RegisterPage;
