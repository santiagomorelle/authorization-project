import { AuthErrorCodes } from 'firebase/auth';

export const handleError = (errorCode) =>
  firebaseErrors.find((error) => error.code === errorCode).message;

const firebaseErrors = [
  {
    code: AuthErrorCodes.EMAIL_EXISTS,
    message: 'The email is already in use.',
  },
  {
    code: AuthErrorCodes.INVALID_EMAIL,
    message: 'Invalid email.',
  },
  {
    code: AuthErrorCodes.INVALID_PASSWORD,
    message: 'Invalid password.',
  },
  {
    code: AuthErrorCodes.USER_DELETED,
    message: 'The user was not found.',
  },
  {
    code: AuthErrorCodes.WEAK_PASSWORD,
    message: 'The password does not meet the requirements.',
  },
];
