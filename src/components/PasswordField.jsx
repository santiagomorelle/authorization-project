import { useState } from 'react';

import {
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from '@chakra-ui/react';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const PasswordField = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl id='password_field' isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup>
        <Input
          name='password'
          onChange={(e) => props.handleChange(e)}
          type={showPassword ? 'text' : 'password'}
        />
        <InputRightElement h='full'>
          <Button
            onClick={() => setShowPassword((showPassword) => !showPassword)}
            variant='ghost'
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export default PasswordField;
