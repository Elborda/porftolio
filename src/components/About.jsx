import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";
import React from "react";

const About = () => {
  return (
    <>
      <Flex justifyContent="center" alignItems="center" padding="15px 0 15px 0">
        <Heading>ABOUT ME</Heading>
      </Flex>
      <Flex justifyContent="space-between" alignItems="flex-start" gap="15px">
        <Flex flexDir="column" w="33%">
          <Heading as="h3" fontSize="25px">
            HELLO! I'M KAMAL
          </Heading>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley book.
          </Text>
          <Button rounded="30px" colorScheme="green">
            <AiOutlineDownload />
            DOWNLOAD MY CV
          </Button>
        </Flex>
        <Flex
          gap="5px"
          flexDir="column"
          w="33%"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Text>Name: Kamal</Text>
          <Text>Birthdate : 21 may 1995</Text>
          <Text w="50%">Address : 23 Quincy, New York, USA</Text>
        </Flex>
        <Flex
          flexDir="column"
          w="33%"
          gap="5px"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Text>Phone : (+01) 123 456 7890</Text>
          <Text>E-mail : email@example.com</Text>
          <Text>Language : English, Spanish</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default About;
