import { Heading, Box, Image } from '@chakra-ui/react';

const Header = (props) => {
  return (
    <Heading>
      <Box align='center'>
        <Image alt={props.alt} boxSize='35%' src={props.src} />
      </Box>
    </Heading>
  );
};

export default Header;
