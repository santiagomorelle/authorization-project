import { Stack, Button } from '@chakra-ui/react';

const SignUpButton = (props) => {
  return (
    <Stack pt={2} spacing={10}>
      <Button
        bg='#1b8fff'
        color='white'
        _hover={{
          bg: '#015af2',
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
