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
            <Flex>
              <ListIcon />
              <Link>Dashbord</Link>
            </Flex>
          </ListItem>
          <ListItem color="#E1E6FB">
            <Flex>
              <ListIcon />
              <Link>Stake</Link>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex>
              <ListIcon />
              <Link>Split</Link>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex>
              <ListIcon />
              <Link>Pools</Link>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex>
              <ListIcon />
              <Link> Swap</Link>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex>
              <ListIcon />

              <Link> Governance</Link>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex>
              <ListIcon />
              <Link>Analytics</Link>
            </Flex>
          </ListItem>
        </UnorderedList>
      </Container>
      <Flex w="100%" justifyContent="center" alignItems="center">
        <Flex w="120px">
          <TwitterIcon />
          <Spacer />
          <LinkedInIcon />
          <Spacer />
          <DiscordIcon />
          <Spacer />
          <GitHubIcon />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SideBar;
