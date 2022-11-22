import {
  Button,
  Flex,
  Heading,
  Icon,
  Img,
  ListIcon,
  UnorderedList,
  Text,
  Box,
} from "@chakra-ui/react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineUser,
  AiFillRocket,
  AiFillDownCircle,
} from "react-icons/ai";
import React from "react";

const Home = () => {
  return (
    <>
      <Flex justify="center" alignItems="center" gap="30px">
        <Img
          w="250px"
          rounded="100%"
          src="https://imgs.search.brave.com/iZPnWiN7Jtr4dJeYb46YZC-tttudIE5OKZXRQ_raioU/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4y/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvYXZhdGFyLTIv/NTEyL29zY2FyX2Jv/eS01MTIucG5n"
        />
        <Flex
          flexDir="column"
          alignItems="flex-start"
          justifyContent="center"
          w="40%"
        >
          <Text>HI THERE!</Text>
          <Heading>I'm a web developer</Heading>
          <Text w="100%">
            I'M UI/UX Designer and Developer with over 5+ years of experience
            and beautiful web applications through carefully crafted design.
          </Text>
          <Flex gap="10px">
            <AiFillLinkedin fontSize="35px" />
            <AiFillGithub fontSize="35px" />
          </Flex>
          <Flex gap="20px">
            <Button>
              <AiOutlineUser /> MORE ABOUT ME
            </Button>
            <Button>
              {" "}
              <AiFillRocket /> MY PORTFOLIO
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex justifyContent="center" alignItems="center" paddingTop="20px">
        <AiFillDownCircle fontSize="35px" />
      </Flex>
    </>
  );
};

export default Home;
