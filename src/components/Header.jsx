import { Heading, Box, Image } from '@chakra-ui/react';

const Header = () => {
  return (
    <Heading>
      <Box align='center'>
        <Image alt='Logo' boxSize='35%' src='logo.png' />
      </Box>
    </Heading>
  );
};

export default Header;
