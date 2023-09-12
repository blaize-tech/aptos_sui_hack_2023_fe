"use client";

import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Flex, Box } from "@chakra-ui/react";
import PoolsList from "./pools-list/PoolsList";

const Pools: React.FC = () => {
  return (
    <Flex as="main" justifyContent="flex-end" w="100%" h="1024px">
      <SideBar currentPage="pools" />
      <Flex
        as="section"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Header heading="pools" />
        <PoolsList />
        <Box h="48px"></Box>
      </Flex>
    </Flex>
  );
};

export default Pools;
