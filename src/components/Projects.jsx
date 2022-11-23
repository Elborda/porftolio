import { Box, Flex, Heading, Img, SimpleGrid } from "@chakra-ui/react";
import ipTracker from "../assets/ip-tracker.png";
import countriesIcon from "../assets/countries.png";
import todoList from "../assets/todo-list.png";
import coctailApp from "../assets/coctail-app.png";

import React from "react";

const Projects = () => {
  return (
    <Flex w="100%" justifyContent="center" alignItems="center" flexDir="column">
      <Flex
        justifyContent="center"
        alignItems="center"
        padding="20px 0 20px 0 "
      >
        <Heading fontSize="50px" color="#666666" paddingBottom="25px">
          PROJECTS
        </Heading>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        padding="0 20px 0 20px"
        w="90%"
      >
        <SimpleGrid columns={[1, 2, 3]} spacing="40px">
          <Box>
            <Img
              rounded="5px"
              src={ipTracker}
              w="290px"
              h="230px"
              objectFit="cover"
              objectPosition="center"
            />
          </Box>
          <Box>
            <Img src={countriesIcon} w="290px" h="230px" rounded="5px" />
          </Box>
          <Box>
            <Img src={todoList} w="290px" h="230px" rounded="5px" />
          </Box>
          <Box>
            <Img src={coctailApp} w="290px" h="230px" rounded="5px" />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Projects;
