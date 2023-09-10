"use client";

import { Flex, Text, Image } from "@chakra-ui/react";
import { MenyIcon, StarIcon } from "@/app/icons/icons";

const Select: React.FC = () => {
  return (
    <Flex
      w="328px"
      h="112px"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Text
        fontFamily="Poppins"
        fontWeight="700"
        fontSize="12px"
        lineHeight="24px"
        letterSpacing="3%"
        color="#777D99"
      >
        Available: 0
      </Text>
      <Flex
        justifyContent="space-between"
        w="328px"
        h="64px"
        alignItems="center"
        opacity="60%"
        borderRadius="16px"
        bg="#1D2747"
        p="20px"
      >
        <Text
          w="173px"
          fontFamily="Poppins"
          fontWeight="500"
          fontSize="16px"
          fontStyle="24px"
          letterSpacing="3%"
          color="#FFFFFF"
        >
          0.00
        </Text>
        <StarIcon />

        <Text
          fontFamily="Poppins"
          fontWeight="500"
          fontSize="16px"
          lineHeight="24px"
          color="#777D99"
        >
          Luna
        </Text>
        <MenyIcon />
      </Flex>
    </Flex>
  );
};

export default Select;
