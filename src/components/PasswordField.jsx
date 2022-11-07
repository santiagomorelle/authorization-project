import { useState } from 'react';

import {
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Text,
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
          placeholder='Your password'
          title=''
          type={showPassword ? 'text' : 'password'}
          value={props.value}
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
      <Text as='sub'>Password must be at least 6 characters long.</Text>
    </FormControl>
  );
};

export default PasswordField;
