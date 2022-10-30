import { Heading, Box, Image } from '@chakra-ui/react';

const SignUpHeader = () => {
  return (
    <Heading>
      <Box align='center'>
        <Image alt='Logo' boxSize='35%' src='/src/assets/logo.png' />
      </Box>
    </Heading>
  );
};

export default SignUpHeader;