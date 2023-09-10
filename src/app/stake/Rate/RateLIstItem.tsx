"use client";
import { Text, Flex } from "@chakra-ui/react";

const RateListItem: React.FC = () => {
  return (
    <Flex justifyContent="space-between">
      <Text
        color="#777D99"
        fontFamily="Poppins"
        fontSize="14px"
        fontWeight="700"
        lineHeight="28px"
      >
        cluna to luna Rate
      </Text>
      <Text
        color="#FFFFFF"
        fontFamily="Poppins"
        fontSize="14px"
        fontWeight="700"
        lineHeight="28px"
      >
        1usd = 1.21atp
      </Text>
    </Flex>
  );
};

export default RateListItem;
