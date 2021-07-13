import { createAction } from '@reduxjs/toolkit';

const resetError = createAction('error/reset');

// eslint-disable-next-line import/no-anonymous-default-export
export default { resetError };
