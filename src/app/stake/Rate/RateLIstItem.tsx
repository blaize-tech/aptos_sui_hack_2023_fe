"use client";
import { Text, Flex } from "@chakra-ui/react";

interface RateItemInterface {
  text: string;
  info: string;
}

const RateListItem: React.FC<RateItemInterface> = ({ text, info }) => {
  return (
    <Flex justifyContent="space-between">
      <Text
        color="#777D99"
        fontFamily="Poppins"
        fontSize="14px"
        fontWeight="700"
        lineHeight="28px"
      >
        {text}
      </Text>
      <Text
        color="#FFFFFF"
        fontFamily="Poppins"
        fontSize="14px"
        fontWeight="700"
        lineHeight="28px"
      >
        {info}
      </Text>
    </Flex>
  );
};

export default RateListItem;
