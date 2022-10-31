import { useState } from 'react';

import { Flex, useColorModeValue, Stack, Box } from '@chakra-ui/react';

import SignUpHeader from './SignUpHeader';
import FormField from './FormField';
import PasswordField from './PasswordField';
import SignUpButton from './SignUpButton';
import LoginButton from './LoginButton';

import { validateNotEmpty } from '../utils/validations';

import toast, { Toaster } from 'react-hot-toast';

import { createUser } from '../api/auth';

import { handleError } from '../firebase/errors';

const SignUpCard = () => {
  const [user, setUser] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (validateNotEmpty(user)) {
      toast.promise(createUser(user), {
        loading: 'Your account is being created...',
        success: 'Your account has been created!',
        error: (error) => handleError(error.code),
      });
    } else {
      toast.error('Email address or password is empty.');
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
          <SignUpHeader />
          <Box
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow='lg'
            p={8}
            rounded='lg'
          >
            <Stack spacing={4}>
              <Box>
                <FormField
                  handleChange={handleInputChange}
                  id='email_field'
                  isRequired={true}
                  label='Email Address'
                  name='email'
                  placeholder='Your email address'
                  type='email'
                />
              </Box>
              <PasswordField handleChange={handleInputChange} />
              <SignUpButton handleSubmit={handleSubmit} />
              <LoginButton />
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default SignUpCard;
