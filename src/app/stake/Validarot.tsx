"use client";
import { Text, Flex, Box } from "@chakra-ui/react";
import { MenyIcon } from "../icons/icons";

const Validator: React.FC = () => {
  return (
    <Flex
      justifyContent="space-between"
      w="480px"
      h="64px"
      alignItems="center"
      opacity="60%"
      borderRadius="16px"
      bg="#1D2747"
      p="20px"
    >
      <Text
        fontFamily="Poppins"
        fontWeight="500"
        fontSize="16px"
        lineHeight="24px"
        color="#777D99"
      >
        Select Validator
      </Text>
      <MenyIcon />
    </Flex>
  );
};

export default Validator;
