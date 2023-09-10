"use client";
import { Text, Flex } from "@chakra-ui/react";

const BalanceContainer: React.FC = () => {
  return (
    <Flex
      w="480px"
      h="135px"
      opacity="60%"
      //   bg="red"
      bg="#1D2747"
      justifyContent="space-evenly"
      alignItems="center"
      mb="2px"
    >
      <Flex flexDirection="column" w="192px">
        <Text
          color="#777D99"
          opacity="100%"
          w="193px"
          fontFamily="Poppins"
          fontWeight="700"
          fontSize="12px"
          lineHeight="24px"
        >
          $0
        </Text>
        <Text
          color="#E1E6FB"
          w="193px"
          fontFamily="Orbitron"
          fontWeight="900"
          fontSize="22px"
          lineHeight="28px"
        >
          0.00
        </Text>
      </Flex>
      <Flex flexDirection="column" w="192px" alignItems="flex-end">
        <Text
          color="#777D99"
          opacity="100%"
          fontFamily="Poppins"
          fontWeight="700"
          fontSize="12px"
          lineHeight="24px"
        >
          Balance: 0
        </Text>
        <Text
          color="#E1E6FB"
          fontFamily="Orbitron"
          fontWeight="900"
          fontSize="22px"
          lineHeight="28px"
        >
          luna
        </Text>
      </Flex>
    </Flex>
  );
};

export default BalanceContainer;
