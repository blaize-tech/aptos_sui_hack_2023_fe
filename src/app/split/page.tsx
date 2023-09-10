"use client";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Center, Flex, Button } from "@chakra-ui/react";
import SemiHead from "./SemiHead";
import Total from "./Total";
import SelectContainer from "./select/SelectContainer";

const Split: React.FC = () => {
  return (
    <Flex as="main" justifyContent="flex-end" w="100%" h="1024px">
      <SideBar />
      <Flex
        as="section"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Header heading="split" />
        <Total />
        <SemiHead />
        <SelectContainer />

        <Center>
          <Button variant="primaryButton">accept and split</Button>
        </Center>
      </Flex>
    </Flex>
  );
};

export default Split;
