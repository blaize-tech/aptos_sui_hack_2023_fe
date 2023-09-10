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
      <RateListItem />
      <RateListItem />
      <RateListItem />
    </Flex>
  );
};

export default RateList;
