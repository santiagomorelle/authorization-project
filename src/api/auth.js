import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

export const createUser = async (user) =>
  createUserWithEmailAndPassword(getAuth(), user.email, user.password);
