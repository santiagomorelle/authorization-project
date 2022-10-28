import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react';

const FormField = (props) => {
  return (
    <Box>
      <FormControl id={props.id} isRequired={props.isRequired}>
        <FormLabel>{props.label}</FormLabel>
        <Input placeholder={props.placeholder} type={props.type} />
      </FormControl>
    </Box>
  );
};

export default FormField;
