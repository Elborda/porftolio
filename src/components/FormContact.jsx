import { Button, Flex, FormControl, Input } from "@chakra-ui/react";
import React from "react";

const FormContact = () => {
  return (
    <FormControl w="70%">
      <Flex>
        <Input placeholder="Name *" />
        <Input placeholder="Email *" />
      </Flex>
      <Input placeholder="Subject" />
      <Input placeholder="Your Message" />
      <Button>Submit</Button>
    </FormControl>
  );
};

export default FormContact;
