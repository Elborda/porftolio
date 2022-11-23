import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import {
  AiOutlineLaptop,
  AiFillCode,
  AiOutlineMobile,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import React from "react";

const Services = () => {
  return (
    <>
      <Flex justifyContent="center" alignItems="center" padding="20px 0 20px 0">
        <Heading fontSize="50px" color="#666666">
          Services
        </Heading>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        padding="0 20px 0 20px "
      >
        <SimpleGrid columns={[1, 2, 3]} gap="20px">
          <Flex
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            boxShadow="md"
            padding="25px"
            rounded="6px"
            border="1px solid lightgray"
          >
            <AiOutlineLaptop fontSize="40px" />
            <Heading
              as="h2"
              color="#6B6675"
              fontSize="30px"
              padding="10px 0 10px 0"
            >
              Web Development
            </Heading>
            <Text>
              Turn and idea into reality, that's what I love to do. From a
              simple web, through a highly convertible landing page, all the way
              to an amazing SPA.
            </Text>
          </Flex>
          <Flex
            rounded="6px"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            boxShadow="md"
            padding="10px"
            border="1px solid lightgray"
          >
            <AiFillCode fontSize="40px" />
            <Heading
              as="h2"
              color="#6B6675"
              fontSize="30px"
              padding="10px 0 10px 0"
            >
              Clean Code
            </Heading>
            <Text textAlign="center">
              Clean Code A readable code is always twice better, allowing you to
              easily find errors and correct them in a short time. Clean code
              and good practices is a must.
            </Text>
          </Flex>
          <Flex
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            boxShadow="md"
            padding="10px"
            border="1px solid lightgray"
            rounded="6px"
          >
            <AiOutlineMobile />
            <Heading
              as="h2"
              color="#6B6675"
              fontSize="30px"
              padding="10px 0 10px 0"
            >
              Responsive Design
            </Heading>
            <Text textAlign="center">
              Nowadays, statistically most modern websites and SPA are open on
              mobile devices. Isn't enough to look amazing, it needs to do it in
              multiple screens.
            </Text>
          </Flex>
          <Flex
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            boxShadow="md"
            padding="10px"
            rounded="6px"
            border="1px solid lightgray"
          >
            <AiOutlineUsergroupAdd />
            <Heading as="h2" color="#6B6675" fontSize="30px">
              Accesibility
            </Heading>
            <Text textAlign="center">
              Amazing webs are for everyone. This days accessibility is more
              important than ever, it's a big mistake to overlook it. SEO takes
              accessibility very seriously.
            </Text>
          </Flex>
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default Services;
