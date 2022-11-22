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
        <Heading>Services</Heading>
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
            padding="10px"
            rounded="20px"
          >
            <AiOutlineLaptop />
            <Heading as="h2">Web Development</Heading>
            <Text>
              Turn and idea into reality, that's what I love to do. From a
              simple web, through a highly convertible landing page, all the way
              to an amazing SPA.
            </Text>
          </Flex>
          <Flex
            rounded="20px"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            boxShadow="md"
            padding="10px"
          >
            <AiFillCode />
            <Heading as="h2">Clean Code</Heading>
            <Text>
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
            rounded="20px"
          >
            <AiOutlineMobile />
            <Heading as="h2">Responsive Design</Heading>
            <Text>
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
            rounded="20px"
          >
            <AiOutlineUsergroupAdd />
            <Heading as="h2">Accesibility</Heading>
            <Text>
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
