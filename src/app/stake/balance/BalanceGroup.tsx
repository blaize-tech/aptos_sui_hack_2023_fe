"use client";
import { Box } from "@chakra-ui/react";
import BalanceContainer from "./BalanceContainre";

const BalanceGroup: React.FC = () => {
  return (
    <Box>
      <BalanceContainer borderTopRadius="28px" borderBottomRadius="38px" />
      <BalanceContainer borderTopRadius="38px" borderBottomRadius="28px" />
    </Box>
  );
};

export default BalanceGroup;
