import { Stack, Button } from '@chakra-ui/react';

const SignButton = (props) => {
  return (
    <Stack pt={2} spacing={10}>
      <Button
        bg='#a048fcfe'
        color='white'
        _hover={{
          bg: '#ca44f8fb',
        }}
        onClick={() => props.handleSubmit()}
        size='lg'
      >
        {props.text}
      </Button>
    </Stack>
  );
};

export default SignButton;
