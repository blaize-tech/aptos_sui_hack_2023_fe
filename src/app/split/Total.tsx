"use client";
import { Text, Center, Flex } from "@chakra-ui/react";
import "../fonts.css";
const Total: React.FC = () => {
  return (
    <Flex w="1080px" h="114px" justifyContent="start">
      <Flex
        w="185px"
        h="114px"
        bg="#1D2747"
        opacity="60%"
        borderRadius="24px"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="flex-start"
        p="32px"
      >
        <Text
          fontFamily="Poppins"
          fontWeight="700"
          fontSize="12px"
          lineHeight="18px"
          letterSpacing="3%"
          color="#777D99"
        >
          Total Luna in Vault
        </Text>
        <Text
          fontFamily="Orbitron"
          fontWeight="900"
          fontSize="22px"
          lineHeight="27.59px"
          color="#E1E6FB"
          opacity="100%"
        >
          0 Luna
        </Text>
      </Flex>
    </Flex>
  );
};

export default Total;
