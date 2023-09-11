"use client";
import { Text, Center, Flex, Box, Button, Heading } from "@chakra-ui/react";

interface HeaderInterface {
  heading: string;
}

const Header: React.FC<HeaderInterface> = ({ heading }) => {
  return (
    <Center as="header" h="120px" w="100%">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        w="1080px"
        h="120px"
      >
        <Flex as="nav" flexDirection="column" justifyContent="space-between">
          <Box>
            <Heading
              as="h1"
              color="#E1E6FB"
              fontSize="89px"
              fontWeight="700"
              fontFamily="Orbitron"
              textTransform="capitalize"
            >
              {heading}
            </Heading>
          </Box>
          <Box>
            <Text
              color="#777D99"
              fontSize="16px"
              fontWeight="500"
              textTransform="capitalize"
              lineHeight="24px"
            >
              tagline will goes here
            </Text>
          </Box>
        </Flex>
        <Button variant="primaryButton">connect wallet</Button>
      </Flex>
    </Center>
  );
};

export default Header;
