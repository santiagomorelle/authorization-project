import { Stack, Text, Link } from '@chakra-ui/react';

const SignInLink = () => {
  return (
    <Stack pt={6}>
      <Text align='center'>
        Already a user? <Link color='#a048fcfe'>Sign in</Link>
      </Text>
    </Stack>
  );
};

export default SignInLink;
