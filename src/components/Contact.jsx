import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import FormContact from "./FormContact";
import React from "react";
const Contact = () => {
  return (
    <>
      <Flex justifyContent="center" alignItems="center" padding="20px 0 20px 0">
        <Heading>Contact</Heading>
      </Flex>
      <Flex justifyContent="space-around" alignItems="center">
        <SimpleGrid columns={[1, 2, 3]} gap="40px">
          <Flex
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            boxShadow="md"
            padding="20px"
          >
            <CiLocationOn />
            <Heading>LOCATION</Heading>
            <Text>Buenos Aires, Argentina</Text>
          </Flex>
          <Flex
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            boxShadow="md"
            padding="20px"
          >
            <CiMail />
            <Heading>EMAIL</Heading>
            <Text>agustinbordachar11@gmail.com</Text>
          </Flex>
          <Flex
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            boxShadow="md"
            padding="20px"
          >
            <CiLocationOn />
            <Heading>PHONE</Heading>
            <Text>(+54)2241-550707</Text>
          </Flex>
        </SimpleGrid>
      </Flex>
      <Flex
        paddingTop="35px"
        w="100%"
        justifyContent="center"
        alignItems="center"
      >
        <FormContact />
      </Flex>
    </>
  );
};

export default Contact;
