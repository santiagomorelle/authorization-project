import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const EmailField = (props) => {
  return (
    <FormControl id='email_field' isRequired={true}>
      <FormLabel>Email Address</FormLabel>
      <Input
        name='email'
        onChange={(e) => props.handleChange(e)}
        placeholder='Your email address'
        type='email'
      />
    </FormControl>
  );
};

export default EmailField;
