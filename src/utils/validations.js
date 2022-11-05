const EMPTY_CREDENTIALS = 'One or more fields are empty.';
const SPACES_NOT_ALLOWED = 'Passwords cannot contain spaces.';

export const validateNotEmpty = (user) =>
  user.email == '' || user.password == '' ? EMPTY_CREDENTIALS : true;

export const validateNoSpaces = (password) =>
  password.indexOf(' ') >= 0 ? SPACES_NOT_ALLOWED : true;

export const validateCredentials = (user) => {
  const isValid = validateNotEmpty(user);
  return isValid != true ? isValid : validateNoSpaces(user.password);
};
