import { Link } from '@chakra-ui/react';

const SignLink = (props) => {
  return (
    <Link
      color='#a048fcfe'
      onClick={() => props.handleClick(props.text == 'Sign up' ? true : false)}
    >
      {props.text}
    </Link>
  );
};

export default SignLink;
