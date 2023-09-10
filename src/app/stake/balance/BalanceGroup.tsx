"use client";
import { Box } from "@chakra-ui/react";
import BalanceContainer from "./BalanceContainre";

const BalanceGroup: React.FC = () => {
  return (
    <Box>
      <BalanceContainer />
      <BalanceContainer />
    </Box>
  );
};

export default BalanceGroup;
