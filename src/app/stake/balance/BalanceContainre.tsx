"use client";
import { Text, Flex } from "@chakra-ui/react";

interface BalanceContainerInterface {
  borderTopRadius: string;
  borderBottomRadius: string;
}

const BalanceContainer: React.FC<BalanceContainerInterface> = ({
  borderTopRadius,
  borderBottomRadius,
}) => {
  return (
    <Flex
      w="480px"
      h="135px"
      bg="rgba(29, 39, 71, 0.4)"
      justifyContent="space-evenly"
      alignItems="center"
      mb="2px"
      borderTopRadius={borderTopRadius}
      borderBottomRadius={borderBottomRadius}
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
