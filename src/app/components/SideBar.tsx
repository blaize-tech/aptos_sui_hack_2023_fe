"use client";
import {
  Circle,
  Text,
  Center,
  Container,
  Flex,
  UnorderedList,
  ListItem,
  Spacer,
} from "@chakra-ui/react";

import {
  TwitterIcon,
  LinkedInIcon,
  DiscordIcon,
  GitHubIcon,
  Dashbord,
  Stake,
  Split,
  Pools,
  Swap,
  Cover,
  Analytics,
} from "../icons/icons";
import logo from "../../../public/logo.svg";

import Link from "next/link";
import Image from "next/image";

import "../fonts.css";

const SideBar = () => {
  return (
    <Flex
      h="1024px"
      w="13.9%"
      flexDirection="column"
      alignItems="center"
      fontFamily="Poppins, sans-serif"
      lineHeight="24px"
    >
      <Container w="120px" mt="104px">
        <Flex flexDirection="column" justifyContent="space-around" h="90px">
          <Image src={logo} width={92} height={16} alt="LOGO"></Image>
          <Flex>
            <Center mr="8px">
              <Circle size="8px" bg="#FF5F72" color="white"></Circle>
            </Center>

            <Text color="#777D99" fontSize="12" fontWeight="700">
              LIVE
            </Text>
          </Flex>
        </Flex>
      </Container>
      <Container w="120px" p="0" mt="92px">
        <UnorderedList
          color="#777D99"
          styleType="none"
          fontSize="12px"
          fontWeight="700"
          spacing={45}
          fontFamily="Poppins"
          h="456px"
          w="120px"
        >
          <ListItem>
            <Link href="/">
              <Flex alignItems="center">
                <Dashbord />
                <Text ml="16px">Dashboard</Text>
              </Flex>
            </Link>
          </ListItem>
          <ListItem color="#E1E6FB">
            <Link href="/stake">
              <Flex alignItems="center">
                <Stake />
                <Text ml="16px" lineHeight="24px">
                  Stake
                </Text>
              </Flex>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/split">
              <Flex alignItems="center">
                <Split />

                <Text ml="16px">Split</Text>
              </Flex>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/pools">
              <Flex alignItems="center">
                <Pools />
                <Text ml="16px">Pools</Text>
              </Flex>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/">
              <Flex alignItems="center">
                <Swap />
                <Text ml="16px"> Swap</Text>
              </Flex>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/">
              <Flex alignItems="center">
                <Cover />
                <Text ml="16px"> Governance</Text>
              </Flex>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/">
              <Flex alignItems="center">
                <Analytics />
                <Text ml="16px">Analytics</Text>
              </Flex>
            </Link>
          </ListItem>
        </UnorderedList>
      </Container>
      <Center mt="164px">
        <Flex w="120px">
          <TwitterIcon />
          <Spacer />
          <LinkedInIcon />
          <Spacer />
          <DiscordIcon />
          <Spacer />
          <GitHubIcon />
        </Flex>
      </Center>
    </Flex>
  );
};

export default SideBar;
