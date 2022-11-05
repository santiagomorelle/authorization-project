import { useState } from 'react';

import toast, { Toaster } from 'react-hot-toast';

import { Flex, useColorModeValue, Stack, Box } from '@chakra-ui/react';

import Header from './Header';
import EmailField from './EmailField';
import PasswordField from './PasswordField';
import SignButton from './SignButton';
import LoginButton from './SignInLink';

import { validateCredentials } from '../utils/validations';

import { createUser } from '../api/auth';

import { handleError } from '../firebase/errors';

const SignCard = () => {
  const [user, setUser] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async () => {
    const validationStatus = validateCredentials(user);
    if (validationStatus == true) {
      toast.promise(createUser(user), {
        loading: 'Your account is being created...',
        success: 'Your account has been created!',
        error: (error) => handleError(error.code),
      });
    } else {
      toast.error(validationStatus);
    }
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
          <Header />
          <Box
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow='lg'
            p={8}
            rounded='lg'
          >
            <Stack spacing={4}>
              <EmailField handleChange={handleInputChange} />
              <PasswordField handleChange={handleInputChange} />
              <SignButton handleSubmit={handleSignUp} text='Sign up' />
              <LoginButton />
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default SignCard;
