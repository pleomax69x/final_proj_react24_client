import * as yup from 'yup';

import { useSelector } from 'react-redux';

import { errorSelectors } from '../redux/error/';
import LoginForm from '../components/LoginForm/LoginForm';

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
  return 'Unknown error. Please try again';
};

const LoginPage = () => {
  const errorFromState = useSelector(errorSelectors);

  const errorMessage = errorFromState
    ? createErrorMessage(errorFromState)
    : null;

  return <LoginForm errorMessage={errorMessage} schema={schema} />;
};

export default LoginPage;
