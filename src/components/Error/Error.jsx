import React from 'react';
import s from './Error.module.scss';

const Error = ({ touched, message }) => {
  if (!touched) {
    return <div className={s.formMessage}>&nbsp;</div>;
  }
  if (message) {
    return <div className={s.formMessage}>{message}</div>;
  }
  return null;
};

export default Error;
