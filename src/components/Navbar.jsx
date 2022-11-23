import {
  Flex,
  Heading,
  Img,
  List,
  UnorderedList,
  Text,
  ListItem,
  Box,
} from "@chakra-ui/react";
import { AiFillHome, AiFillContacts } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import React from "react";

const Navbar = () => {
  return (
    <>
      <Box height="92px" position="fixed" w="100%">
        <Flex
          justifyContent="space-between"
          padding="0 30px 0 30px"
          alignItems="center"
          height="100%"
          p="0 80px 0 80px"
        >
          <Heading as="h1" color="whiteAlpha.900" fontSize="30px">
            AGUSTÍN
          </Heading>
          <Flex justifyContent="center" alignItems="center">
            <UnorderedList
              display="flex"
              listStyleType="none"
              gap="15px"
              color="whiteAlpha.900"
              fontWeight="bold"
            >
              <Flex
                flexDir="row"
                justifyContent="center"
                alignItems="center"
                gap="15px"
              >
                <AiFillHome />
                <ListItem cursor="pointer">Home</ListItem>
                <FaUserAlt />
                <ListItem cursor="pointer">About</ListItem>
                <BsFillBriefcaseFill />
                <ListItem cursor="pointer">Portfolio</ListItem>
                <AiFillContacts />
                <ListItem cursor="pointer">Contact</ListItem>
              </Flex>
            </UnorderedList>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
