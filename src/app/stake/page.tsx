"use client";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { Text, Center, Flex, Button } from "@chakra-ui/react";
import BalanceGroup from "./balance/BalanceGroup";
import Validator from "./Validator";
import RateList from "./Rate/RateList";
import SemiHead from "./SemiHead";

const Stake: React.FC = () => {
  return (
    <Flex as="main" justifyContent="flex-end" w="100%" h="1024px">
      <SideBar currentPage="stake" />
      <Flex
        as="section"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Header heading="stake" />
        <SemiHead />
        <Flex flexDirection="column" justifyContent="space-between" h="529px">
          <BalanceGroup />
          <Validator />
          <RateList />
        </Flex>
        <Center>
          <Button variant="primaryButton" type="button">
            <Text>accept and bond</Text>
          </Button>
        </Center>
      </Flex>
    </Flex>
  );
};

export default Stake;
