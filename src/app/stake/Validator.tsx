"use client";
import { Text, Flex } from "@chakra-ui/react";
import { MenyIcon } from "../icons/icons";

const Validator: React.FC = () => {
  return (
    <Flex
      justifyContent="space-between"
      w="480px"
      h="64px"
      alignItems="center"
      bg="rgba(29, 39, 71, 0.4)"
      borderRadius="16px"
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
