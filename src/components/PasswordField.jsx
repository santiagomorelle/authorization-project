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

const PasswordField = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup>
        <Input type={showPassword ? 'text' : 'password'} />
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
