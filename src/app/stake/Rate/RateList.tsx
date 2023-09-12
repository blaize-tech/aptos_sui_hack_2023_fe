"use client";
import { Flex } from "@chakra-ui/react";

import RateListItem from "./RateLIstItem";

const RateList: React.FC = () => {
  return (
    <Flex
      w="480px"
      h="128px"
      flexDirection="column"
      justifyContent="space-between"
    >
      <RateListItem text="cluna to Luna Rate" info="1USDT = 1.121ATP" />
      <RateListItem text="cluna MCap" info="$37,190.872" />
      <RateListItem text="Luna in vault" info="$92,440.793" />
    </Flex>
  );
};

export default RateList;
