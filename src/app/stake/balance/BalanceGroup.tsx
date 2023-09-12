"use client";
import { Box } from "@chakra-ui/react";
import BalanceContainer from "./BalanceContainre";

const BalanceGroup: React.FC = () => {
  return (
    <Box>
      <BalanceContainer borderTopRadius="22px" borderBottomRadius="42px" />
      <BalanceContainer borderTopRadius="42px" borderBottomRadius="22px" />
    </Box>
  );
};

export default BalanceGroup;
