"use client";
import { Text, Center, Flex, Box } from "@chakra-ui/react";
import { StarIcon } from "../icons/icons";
const SemiHead: React.FC = () => {
  return (
    <Center
      color="#FFF"
      fontSize="30px"
      fontFamily="Orbitron"
      fontWeight="900"
      alignItems="center"
      h="47px"
    >
      <Box>
        <Text
          color="#599CFF"
          mr="32px"
          fontSize="34px"
          fontWeight="900"
          fontFamily="Orbitron"
        >
          Bond
        </Text>
        <Flex>
          <Box
            w="64px"
            h="3px"
            backgroundColor="#FFF"
            mr="4px"
            borderRadius="1px"
          ></Box>
          <Box w="8px" h="3px" borderRadius="1px" backgroundColor="#FFF"></Box>
        </Flex>
      </Box>
      <StarIcon />
      <Text
        color="#E1E6FB"
        ml="32px"
        fontSize="34px"
        fontWeight="900"
        fontFamily="Orbitron"
      >
        Redeem
      </Text>
    </Center>
  );
};

export default SemiHead;
