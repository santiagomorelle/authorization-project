import { Link } from '@chakra-ui/react';

import { generateId } from '../utils/generators';

const SignLink = (props) => {
  return (
    <Link
      color='#a048fcfe'
      id={generateId(props.text, 'link')}
      onClick={() => props.handleClick(props.text == 'Sign up' ? true : false)}
    >
      {props.text}
    </Link>
  );
};

export default SignLink;
