import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const FormField = (props) => {
  return (
    <FormControl id={props.id} isRequired={props.isRequired}>
      <FormLabel>{props.label}</FormLabel>
      <Input
        name={props.name}
        onChange={(e) => props.handleChange(e)}
        placeholder={props.placeholder}
        type={props.type}
      />
    </FormControl>
  );
};

export default FormField;
