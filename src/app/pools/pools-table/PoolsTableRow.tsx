import { MenyIcon } from "@/app/icons/icons";
import { StarIcon } from "@/app/icons/icons";
import { Tr, Td, Flex, Center, Text } from "@chakra-ui/react";

const PoolsTableRow: React.FC = () => {
  return (
    <Tr color="#FFF" bg="rgba(29, 39, 71, 0.4)">
      <Td borderLeftRadius="24px">
        <Flex justifyContent="space-between" alignItems="center">
          <StarIcon />
          <Text
            fontFamily="Orbitron"
            fontWeight="900"
            fontSize="13px"
            lineHeight="16.3px"
            color="#E1E6FB"
          >
            Cake BNB
          </Text>
          <Center
            color="#B692F6"
            border="1px solid #B692F6"
            borderRadius="32px"
            p="4px 8px 4px 8px"
          >
            <Text
              fontFamily="Poppins"
              fontWeight="700"
              fontSize="10px"
              lineHeight="15px"
            >
              0.25%
            </Text>
          </Center>

          <Center
            color="#32D583"
            border="1px solid #32D583"
            borderRadius="32px"
            p="4px 8px 4px 8px"
          >
            <Text
              fontFamily="Poppins"
              fontWeight="700"
              fontSize="10px"
              lineHeight="15px"
            >
              boosted
            </Text>
          </Center>
        </Flex>
      </Td>
      <Td>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text variant="tableHead">Earned</Text>
          <Text variant="tableText">0</Text>
        </Flex>
      </Td>
      <Td>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text variant="tableHead">Liquidity</Text>
          <Text variant="tableText">$6,136,811</Text>
        </Flex>
      </Td>
      <Td>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text variant="tableHead">APR</Text>
          <Text variant="tableText" color="#32D583">
            53.64%
          </Text>
        </Flex>
      </Td>
      <Td>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text variant="tableHead">Multiplier</Text>
          <Text variant="tableText">178x</Text>
        </Flex>
      </Td>
      <Td>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text variant="tableHead">Available</Text>
          <Text variant="tableText">0 LP</Text>
        </Flex>
      </Td>
      <Td>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text variant="tableHead">Staked</Text>
          <Text variant="tableText">0 LP</Text>
        </Flex>
      </Td>
      <Td borderRightRadius="24px">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <MenyIcon />
        </Flex>
      </Td>
    </Tr>
  );
};

export default PoolsTableRow;
