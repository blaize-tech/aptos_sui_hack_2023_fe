"use client";
import { Box } from "@chakra-ui/react";
import BalanceContainer from "./BalanceContainre";

const BalanceGroup: React.FC = () => {
  return (
    <Box h="272px">
      <BalanceContainer
        borderTopRadius="22px"
        borderBottomRadius="42px"
        tokenName="LUNA"
      />
      <BalanceContainer
        borderTopRadius="42px"
        borderBottomRadius="22px"
        tokenName="cLUNA"
      />
    </Box>
  );
};

export default BalanceGroup;
