"use client";

import { Flex, Text, Select } from "@chakra-ui/react";
import { MenyIcon, StarIcon } from "@/app/icons/icons";
import Image from "next/image";
import luna from "../../../../public/luna.png";

const SelectComponnent: React.FC = () => {
  return (
    <Flex
      w="328px"
      h="112px"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Text
        fontFamily="Poppins"
        fontWeight="700"
        fontSize="12px"
        lineHeight="24px"
        letterSpacing="3%"
        color="#777D99"
      >
        Available: 0
      </Text>
      <Flex
        justifyContent="space-between"
        w="328px"
        h="64px"
        alignItems="center"
        borderRadius="16px"
        bg="rgba(29, 39, 71, 0.4)"
        p="20px"
      >
        <Text
          w="173px"
          fontFamily="Poppins"
          fontWeight="500"
          fontSize="16px"
          fontStyle="24px"
          letterSpacing="3%"
          color="#FFFFFF"
        >
          0.00
        </Text>
        <Image src={luna} width={24} height={24} alt="luna" />

        <Select
          placeholder="Luna"
          variant="unstyled"
          icon={<MenyIcon />}
          w="96px"
          bg="none"
          defaultValue="option1"
          color="#777D99"
          fontFamily="Poppins"
          fontWeight="500"
          fontSize="16px"
          lineHeight="24px"
          textAlign="center"
        >
          <option value="option1">pLuna</option>
          <option value="option2">TLuna</option>
        </Select>
      </Flex>
    </Flex>
  );
};

export default SelectComponnent;
