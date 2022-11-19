import { Stack, Button } from '@chakra-ui/react';

import { generateId } from '../utils/generators';

const SignButton = (props) => {
  return (
    <Stack pt={2} spacing={10}>
      <Button
        bg='#a048fcfe'
        color='white'
        _hover={{
          bg: '#ca44f8fb',
        }}
        id={generateId(props.text, 'button')}
        onClick={() => props.handleSubmit()}
        size='lg'
      >
        {props.text}
      </Button>
    </Stack>
  );
};

export default SignButton;
