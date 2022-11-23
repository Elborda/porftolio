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
  keyframes,
} from "@chakra-ui/react";
import bacgkroundHome from "../assets/background.jpg";
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
      <Flex
        justify="center"
        alignItems="center"
        gap="30px"
        height="100vh"
        backgroundImage={bacgkroundHome}
        backgroundPosition="center"
      >
        <Img
          w="300px"
          rounded="100%"
          border="10px solid rgba(48, 57, 49,.6) "
          src="https://imgs.search.brave.com/iZPnWiN7Jtr4dJeYb46YZC-tttudIE5OKZXRQ_raioU/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4y/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvYXZhdGFyLTIv/NTEyL29zY2FyX2Jv/eS01MTIucG5n"
        />
        <Flex
          flexDir="column"
          alignItems="flex-start"
          justifyContent="center"
          w="40%"
        >
          <Text fontWeight="bold" color="whiteAlpha.900">
            HI THERE!
          </Text>
          <Heading
            color="whiteAlpha.900"
            fontSize="38"
            paddingTop="10px"
            borderRight="2px solid white"
            textAlign="center"
            paddingRight="5px"
            whiteSpace="nowrap"
          >
            I'M A WEB DEVELOPER
          </Heading>
          <Text
            w="100%"
            color="whiteAlpha.900"
            fontSize="15px"
            paddingTop="15px"
          >
            I'M UI/UX Designer and Developer with over 5+ years of experience
            and beautiful web applications through carefully crafted design.
          </Text>
          <Flex
            gap="10px"
            paddingTop="15px"
            justifyContent="center"
            alignItems="center"
          >
            <AiFillLinkedin fontSize="28px" color="white" />
            <AiFillGithub fontSize="28px" color="white" />
          </Flex>
          <Flex gap="20px" paddingTop="15px">
            <Button rounded="50px" w="200px" colorScheme="gray">
              <AiOutlineUser /> MORE ABOUT ME
            </Button>
            <Button rounded="50px" w="200px" colorScheme="green">
              <AiFillRocket /> MY PORTFOLIO
            </Button>
          </Flex>
        </Flex>
      </Flex>
      {/* <Flex justifyContent="center" alignItems="center" paddingTop="20px">
        <AiFillDownCircle fontSize="35px" />
      </Flex> */}
    </>
  );
};

export default Home;
