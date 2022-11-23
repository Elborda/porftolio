import { Flex, Heading, Image, Img, SimpleGrid } from "@chakra-ui/react";
import chakraIcon from "../assets/chakra-icon.svg";
import React from "react";

const Tech = () => {
  return (
    <>
      <Flex alignItems="center" justifyContent="center" padding="45px 0 15px 0">
        <Heading fontSize="50px" color="#666666">
          TECH AND TOOLS
        </Heading>
      </Flex>
      <Flex justify="center" alignItems="center" gap="30px" paddingTop="20px">
        <SimpleGrid columns={[2, 3, 4, 5]} spacing="30px">
          <Img
            w="100px"
            h="100px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <Img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            w="100px"
            h="100px"
          />
          <Img
            w="100px"
            h="100px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          />
          <Img
            w="100px"
            h="100px"
            src="https://pngimg.com/uploads/github/github_PNG40.png"
          />
          <Img
            w="100px"
            h="100px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          />
          <Img
            w="100px"
            h="100px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          />
          <Img w="100px" h="80px" src={chakraIcon} />
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default Tech;
