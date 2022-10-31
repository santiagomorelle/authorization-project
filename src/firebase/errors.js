import { AuthErrorCodes } from 'firebase/auth';

export const handleError = (errorCode) =>
  firebaseErrors.find((error) => error.code === errorCode).message;

const firebaseErrors = [
  {
    code: AuthErrorCodes.EMAIL_EXISTS,
    message: 'This email is already in use.',
  },
  {
    code: AuthErrorCodes.INVALID_EMAIL,
    message: 'Invalid email address.',
  },
  {
    code: AuthErrorCodes.WEAK_PASSWORD,
    message: 'Choose a stronger password, please.',
  },
];
