import { Box, Flex, Heading, Img, SimpleGrid } from "@chakra-ui/react";
import ipTracker from "../assets/ip-tracker.png";
import countriesIcon from "../assets/countries.png";
import todoList from "../assets/todo-list.png";
import coctailApp from "../assets/coctail-app.png";

import React from "react";

const Projects = () => {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        padding="20px 0 20px 0 "
      >
        <Heading>Projects</Heading>
      </Flex>
      <Flex justifyContent="center" alignItems="center" padding="0 20px 0 20px">
        <SimpleGrid columns={[1, 2, 3]} spacing="40px">
          <Box>
            <Img
              src={ipTracker}
              w="320px"
              h="320px"
              objectFit="cover"
              objectPosition="center"
            />
          </Box>
          <Box>
            <Img src={countriesIcon} w="320px" h="320px" />
          </Box>
          <Box>
            <Img src={todoList} w="320px" h="320px" />
          </Box>
          <Box>
            <Img src={coctailApp} w="320px" h="320px" />
          </Box>
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default Projects;
