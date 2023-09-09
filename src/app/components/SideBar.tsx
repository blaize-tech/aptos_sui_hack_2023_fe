"use client";
import {
  Image,
  Circle,
  Text,
  Center,
  Container,
  Flex,
  UnorderedList,
  ListItem,
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
          <Image src="" alt="ssss" w="92px" h="16px" />
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
            <Flex alignItems="center">
              <Dashbord />
              <Link ml="16px">Dashbord</Link>
            </Flex>
          </ListItem>
          <ListItem color="#E1E6FB">
            <Flex alignItems="center">
              <Stake />
              <Link ml="16px" lineHeight="24px">
                Stake
              </Link>
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
