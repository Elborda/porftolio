import { Box, Button, Flex, Heading, Text, Progress } from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";
import React from "react";

const About = () => {
  return (
    <Box paddingTop="50px">
      <Box paddingBottom="45px">
        <Flex
          gap="10px"
          justifyContent="center"
          alignItems="center"
          padding="15px 0 10px 0"
        >
          <Heading fontSize="50px" color="#666666">
            ABOUT
          </Heading>
          <Heading fontSize="50px" color="#666666">
            ME
          </Heading>
        </Flex>
        <Flex justifyContent="center" alignItems="center">
          <Progress
            w="20%"
            colorScheme="green"
            isIndeterminate
            size="sm"
            value={20}
            rounded="10px"
          />
        </Flex>
      </Box>
      <Flex w="100%" justifyContent="center" alignItems="center">
        <Flex
          justifyContent="space-between"
          alignItems="flex-start"
          w="90%"
          gap="15px"
        >
          <Flex flexDir="column" justifyContent="center" w="450px">
            <Heading as="h3" fontSize="25px">
              HELLO! I'M KAMAL
            </Heading>
            <Text padding="10px 0 15px 0" lineHeight="7" fontSize="15px">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley book.
            </Text>
            <Button rounded="30px" colorScheme="green" w="230px">
              <AiOutlineDownload />
              DOWNLOAD MY CV
            </Button>
          </Flex>
          <Flex
            gap="10px"
            flexDir="column"
            justifyContent="center"
            alignItems="flex-start"
            paddingTop="5px"
          >
            <Text>Name: Kamal</Text>
            <Text>Birthdate : 21 may 1995</Text>
            <Text>Address : 23 Quincy, New York, USA</Text>
          </Flex>
          <Flex
            flexDir="column"
            gap="10px"
            justifyContent="center"
            alignItems="flex-start"
            paddingTop="5px"
          >
            <Text>Phone : (+01) 123 456 7890</Text>
            <Text>E-mail : email@example.com</Text>
            <Text>Language : English, Spanish</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default About;
