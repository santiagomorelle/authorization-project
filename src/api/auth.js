import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

import { handleError } from '../firebase/errors';

export const createUser = async (user) => {
  try {
    await createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  } catch (error) {
    return handleError(error.code);
  }
};
