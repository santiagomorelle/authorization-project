import { useState } from 'react';

import toast, { Toaster } from 'react-hot-toast';

import { Flex, useColorModeValue, Stack, Box, Text } from '@chakra-ui/react';

import Header from './Header';
import EmailField from './EmailField';
import PasswordField from './PasswordField';
import SignButton from './SignButton';
import SignLink from './SignLink';
import UserModal from './UserModal';

import { validateCredentials } from '../utils/validations';

import {
  firebaseSignUp,
  firebaseSignIn,
  getCurrentUser,
  firebaseSignOut,
} from '../api/auth';

const SignCard = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [signUpMode, setSignUpMode] = useState(true);
  const [signedUser, setSignedUser] = useState('');

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const validationStatus = validateCredentials(user);

    if (validationStatus != true) toast.error(validationStatus);
    else signUpMode ? signUp() : signIn();
  };

  const signUp = async () => {
    const response = await firebaseSignUp(user);
    response != undefined
      ? toast.error(response)
      : toast.success('Your account has been created!');
    setUser({ email: '', password: '' });
  };

  const signIn = async () => {
    const response = await firebaseSignIn(user);
    response != undefined
      ? toast.error(response)
      : toast.success('Signed in successfully!') &&
        setSignedUser(getCurrentUser().email);
    setUser({ email: '', password: '' });
  };

  const signOut = async () => {
    await firebaseSignOut(user);
    setSignedUser('');
  };

  return (
    <>
      <Toaster />
      <Flex
        align='center'
        bg={useColorModeValue('gray.50', 'gray.800')}
        justify='center'
        minH='100vh'
      >
        <Stack maxW='lg' mx='auto' px={6} py={12} spacing={8}>
          <Header
            alt={signUpMode ? 'Sign up' : 'Sign in'}
            src={signUpMode ? 'sign-up.png' : 'sign-in.png'}
          />
          <Box
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow='lg'
            p={8}
            rounded='lg'
          >
            <Stack spacing={4}>
              <EmailField handleChange={handleInputChange} value={user.email} />
              <PasswordField
                handleChange={handleInputChange}
                value={user.password}
              />
              <SignButton
                handleSubmit={handleSubmit}
                text={signUpMode ? 'Sign up' : 'Sign in'}
              />
              <Stack pt={6}>
                <Text align='center'>
                  {signUpMode ? 'Already a user?' : 'Need an account?'}{' '}
                  <SignLink
                    handleClick={setSignUpMode}
                    text={signUpMode ? 'Sign in' : 'Sign up'}
                  />
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      {signedUser != '' && <UserModal signOut={signOut} user={signedUser} />}
    </>
  );
};

export default SignCard;
