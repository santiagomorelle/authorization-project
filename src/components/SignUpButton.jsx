import { Stack, Button } from '@chakra-ui/react';

const SignUpButton = (props) => {
  return (
    <Stack pt={2} spacing={10}>
      <Button
        bg='#a048fcfe'
        color='white'
        _hover={{
          bg: '#ca44f8fb',
        }}
        loadingText='Signing Up'
        onClick={() => props.handleSubmit()}
        size='lg'
      >
        Sign up
      </Button>
    </Stack>
  );
};

export default SignUpButton;
