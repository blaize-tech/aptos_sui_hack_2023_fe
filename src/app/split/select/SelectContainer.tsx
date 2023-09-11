"use client";
import { Center, Flex, Text } from "@chakra-ui/react";
import SelectComponnent from "./Select";

const SelectContainer: React.FC = () => {
  return (
    <Flex h="279px" w="1080px" flexDirection="column" justifyContent="start">
      <Center>
        <Text
          fontFamily="Orbitron"
          fontWeight="900"
          fontSize="22px"
          lineHeight="27.59px"
          color="#E1E6FB"
        >
          Select Amount and Asset to Split
        </Text>
      </Center>
      <Flex justifyContent="space-between" mt="48px">
        <SelectComponnent />
        <SelectComponnent />
        <SelectComponnent />
      </Flex>
    </Flex>
  );
};

export default SelectContainer;
