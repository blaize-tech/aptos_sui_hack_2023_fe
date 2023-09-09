"use client";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import {
  Text,
  Center,
  Flex,
  Box,
  Button,
  Menu,
  MenuButton,
} from "@chakra-ui/react";
import { StarIcon, MenyIcon } from "../icons/icons";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Stake: React.FC = () => {
  return (
    <main>
      <SideBar />
      <Flex
        as="section"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Header heading="Stake" />
        <Center
          color="#FFF"
          h="47px"
          fontSize="30px"
          fontFamily="Orbitron"
          fontWeight="900"
          alignItems="center"
        >
          <Box>
            <Text
              color="#599CFF"
              mr="32px"
              fontSize="34px"
              fontWeight="900"
              fontFamily="Orbitron"
            >
              Bond
            </Text>
            <Flex>
              <Box
                w="64px"
                h="3px"
                backgroundColor="#FFF"
                mr="4px"
                borderRadius="1px"
              ></Box>
              <Box
                w="8px"
                h="3px"
                borderRadius="1px"
                backgroundColor="#FFF"
              ></Box>
            </Flex>
          </Box>
          <StarIcon />
          <Text
            color="#E1E6FB"
            ml="32px"
            fontSize="34px"
            fontWeight="900"
            fontFamily="Orbitron"
          >
            Redeem
          </Text>
        </Center>

        <Flex flexDirection="column" justifyContent="space-between" h="529px">
          <Box>
            <Flex
              w="480px"
              h="135px"
              backgroundColor="#1D274"
              opacity="40%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Flex flexDirection="column" w="192px">
                <Text
                  color="#777D99"
                  opacity="100%"
                  w="193px"
                  fontFamily="Poppins"
                  fontWeight="700"
                  fontSize="12px"
                  lineHeight="24px"
                >
                  $0
                </Text>
                <Text
                  color="#E1E6FB"
                  w="193px"
                  fontFamily="Orbitron"
                  fontWeight="900"
                  fontSize="22px"
                  lineHeight="28px"
                >
                  0.00
                </Text>
              </Flex>
              <Flex flexDirection="column" w="192px" alignItems="flex-end">
                <Text
                  color="#777D99"
                  opacity="100%"
                  fontFamily="Poppins"
                  fontWeight="700"
                  fontSize="12px"
                  lineHeight="24px"
                >
                  Balance: 0
                </Text>
                <Text
                  color="#E1E6FB"
                  fontFamily="Orbitron"
                  fontWeight="900"
                  fontSize="22px"
                  lineHeight="28px"
                >
                  luna
                </Text>
              </Flex>
            </Flex>
            <Flex
              w="480px"
              h="135px"
              backgroundColor="#1D274"
              opacity="40%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Flex flexDirection="column" w="192px">
                <Text
                  color="#777D99"
                  opacity="100%"
                  w="193px"
                  fontFamily="Poppins"
                  fontWeight="700"
                  fontSize="12px"
                  lineHeight="24px"
                >
                  $0
                </Text>
                <Text
                  color="#E1E6FB"
                  w="193px"
                  fontFamily="Orbitron"
                  fontWeight="900"
                  fontSize="22px"
                  lineHeight="28px"
                >
                  0.00
                </Text>
              </Flex>
              <Flex flexDirection="column" w="192px" alignItems="flex-end">
                <Text
                  color="#777D99"
                  opacity="100%"
                  fontFamily="Poppins"
                  fontWeight="700"
                  fontSize="12px"
                  lineHeight="24px"
                >
                  Balance: 0
                </Text>
                <Text
                  color="#E1E6FB"
                  fontFamily="Orbitron"
                  fontWeight="900"
                  fontSize="22px"
                  lineHeight="28px"
                >
                  cluna
                </Text>
              </Flex>
            </Flex>
          </Box>

          <Flex
            justifyContent="space-between"
            w="480px"
            h="64px"
            alignItems="center"
            background="#1D274"
            opacity="40%"
            borderRadius="16px"
          >
            <Text
              fontFamily="Poppins"
              fontWeight="500"
              fontSize="16px"
              lineHeight="24px"
              color="#777D99"
            >
              Select Validator
            </Text>
            <MenyIcon />
          </Flex>

          <Flex
            w="480px"
            h="128px"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Flex justifyContent="space-between">
              <Text
                color="#777D99"
                fontFamily="Poppins"
                fontSize="14px"
                fontWeight="700"
                lineHeight="28px"
              >
                cluna to luna Rate
              </Text>
              <Text
                color="#FFFFFF"
                fontFamily="Poppins"
                fontSize="14px"
                fontWeight="700"
                lineHeight="28px"
              >
                1usd = 1.21atp
              </Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text
                color="#777D99"
                fontFamily="Poppins"
                fontSize="14px"
                fontWeight="700"
                lineHeight="28px"
              >
                cluna to luna Rate
              </Text>
              <Text
                color="#FFFFFF"
                fontFamily="Poppins"
                fontSize="14px"
                fontWeight="700"
                lineHeight="28px"
              >
                1usd = 1.21atp
              </Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text
                color="#777D99"
                fontFamily="Poppins"
                fontSize="14px"
                fontWeight="700"
                lineHeight="28px"
              >
                cluna to luna Rate
              </Text>
              <Text
                color="#FFFFFF"
                fontFamily="Poppins"
                fontSize="14px"
                fontWeight="700"
                lineHeight="28px"
              >
                1usd = 1.21atp
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Center>
          <Button variant="primaryButton">accept and bond</Button>
        </Center>
      </Flex>
    </main>
  );
};

export default Stake;
