import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { handleError } from '../firebase/errors';

export const firebaseSignUp = async (user) => {
  try {
    await createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  } catch (error) {
    return handleError(error.code);
  }
};

export const firebaseSignIn = async (user) => {
  try {
    await signInWithEmailAndPassword(getAuth(), user.email, user.password);
  } catch (error) {
    return handleError(error.code);
  }
};

export const getCurrentUser = () => getAuth().currentUser;

export const firebaseSignOut = async () => await signOut(getAuth());
