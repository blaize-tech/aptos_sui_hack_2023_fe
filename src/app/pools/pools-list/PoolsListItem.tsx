import { MenyIcon } from "@/app/icons/icons";
import { Flex, Center, Text, ListItem } from "@chakra-ui/react";
import Image from "next/image";
import luna from "../../../../public/luna.png";

const PoolsListItem: React.FC = () => {
  return (
    <ListItem
      color="#FFF"
      bg="rgba(29, 39, 71, 0.4)"
      borderRadius="24px"
      h="104px"
      mb="20px"
    >
      <Flex h="100%" w="100%" justifyContent="space-evenly">
        <Flex justifyContent="space-between" alignItems="center" w="270px">
          <Image src={luna} width={24} height={24} alt="luna" />
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
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text variant="ListHeadingText">Earned</Text>
          <Text variant="ListText">0</Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text variant="ListHeadingText">Liquidity</Text>
          <Text variant="ListText">$6,136,811</Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text variant="ListHeadingText">APR</Text>
          <Text variant="ListText" color="#32D583">
            53.64%
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text variant="ListHeadingText">Multiplier</Text>
          <Text variant="ListText">178x</Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text variant="ListHeadingText">Available</Text>
          <Text variant="ListText">0 LP</Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text variant="ListHeadingText">Staked</Text>
          <Text variant="ListText">0 LP</Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <MenyIcon />
        </Flex>
      </Flex>
    </ListItem>
  );
};

export default PoolsListItem;
