"use client";
import {
  Box,
  Image,
  Circle,
  Text,
  Center,
  Container,
  Flex,
  UnorderedList,
  ListItem,
  ListIcon,
  Spacer,
  Link,
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

const SideBar = () => {
  return (
    <Flex
      h="100%"
      w="13.9%"
      flexDirection="column"
      alingItems="center"
      justifyContent="space-around"
    >
      <Container w="100%">
        <Image src="" alt="ssss" w="92px" h="16px" />
        <Flex>
          <Center mr="8px">
            <Circle size="8px" bg="#FF5F72" color="white"></Circle>
          </Center>

          <Text color="#777D99" fontSize="12" fontWeight="700">
            LIVE
          </Text>
        </Flex>
      </Container>
      <Container w="120px" p="0">
        <UnorderedList
          color="#777D99"
          styleType="none"
          fontSize="12px"
          fontWeight="700"
          spacing={55}
          letter="3%"
          fontFamily="Poppins"
          h="456px"
          w="120px"
        >
          <ListItem>
            <Flex alignItems="center">
              <Dashbord />
              <Link ml="16px">Dashbord</Link>
            </Flex>
          </ListItem>
          <ListItem color="#E1E6FB">
            <Flex alignItems="center">
              <Stake />
              <Link ml="16px">Stake</Link>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex alignItems="center">
              <Split />
              <Link ml="16px">Split</Link>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex alignItems="center">
              <Pools />
              <Link ml="16px">Pools</Link>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex alignItems="center">
              <Swap />
              <Link ml="16px"> Swap</Link>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex alignItems="center">
              <Cover />
              <Link ml="16px"> Governance</Link>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex alignItems="center">
              <Analytics />
              <Link ml="16px">Analytics</Link>
            </Flex>
          </ListItem>
        </UnorderedList>
      </Container>
      <Center>
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
