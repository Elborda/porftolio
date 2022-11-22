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
import React from "react";

const Navbar = () => {
  return (
    <>
      <Box height="92px">
        <Flex
          justifyContent="space-between"
          padding="0 30px 0 30px"
          alignItems="center"
          height="100%"
        >
          <Heading as="h1">AGUSTÍN</Heading>
          <Flex justifyContent="center" alignItems="center">
            <UnorderedList display="flex" listStyleType="none" gap="15px">
              <ListItem cursor="pointer">Home</ListItem>
              <ListItem cursor="pointer">About</ListItem>
              <ListItem cursor="pointer">Portfolio</ListItem>
              <ListItem cursor="pointer">Contact</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
