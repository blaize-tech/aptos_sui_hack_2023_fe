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
} from "@chakra-ui/react";

import {
  TwitterIcon,
  LinkedInIcon,
  DiscordIcon,
  GitHubIcon,
} from "../icons/icons";

const SideBar = () => {
  const listProperty = {
    dashbord: "../../img/dashbord.svg",
  };
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
      <Container>
        <UnorderedList
          color="#777D99"
          styleType="none"
          fontSize="12px"
          fontWeight="700"
          spacing={55}
          letter="3%"
          fontFamily="Poppins"
        >
          <ListItem>
            <ListIcon />
            Dashbord
          </ListItem>
          <ListItem color="#E1E6FB">
            <ListIcon />
            Stake
          </ListItem>
          <ListItem>
            <ListIcon />
            Split
          </ListItem>
          <ListItem>
            <ListIcon />
            Pools
          </ListItem>
          <ListItem>
            <ListIcon />
            Swap
          </ListItem>
          <ListItem>
            <ListIcon />
            Governance
          </ListItem>
          <ListItem>
            <ListIcon />
            Analytics
          </ListItem>
        </UnorderedList>
      </Container>
      <Box>
        <Flex w="120px" justifyContent="center" alingItems="center">
          <TwitterIcon />
          <Spacer />
          <LinkedInIcon />
          <Spacer />
          <DiscordIcon />
          <Spacer />
          <GitHubIcon />
        </Flex>
      </Box>
    </Flex>
  );
};

export default SideBar;
