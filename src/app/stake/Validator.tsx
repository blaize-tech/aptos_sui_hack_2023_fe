"use client";
import { Select } from "@chakra-ui/react";
import { MenyIcon } from "../icons/icons";

const Validator: React.FC = () => {
  return (
    <Select
      icon={<MenyIcon />}
      placeholder="Select Validator"
      variant="unstyled"
      fontFamily="Poppins"
      fontWeight="500"
      fontSize="16px"
      lineHeight="24px"
      color="#777D99"
      w="480px"
      h="64px"
      bg="rgba(29, 39, 71, 0.4)"
      borderRadius="16px"
      p="20px"
    >
      <option value="validator1">Validator 1</option>
      <option value="validator2">Validator 2</option>
      <option value="validator3">Validator 3</option>
    </Select>
  );
};

export default Validator;
