"use client";
import { Text, Center, Flex, Box, Button, Heading } from "@chakra-ui/react";

interface HeaderInterface {
  heading: string;
}

const Header: React.FC<HeaderInterface> = ({ heading }) => {
  return (
    <Center as="header" h="120px" w="100%">
      <Flex alignItems="center" justifyContent="space-between" w="1080px">
        <Box as="nav">
          <Heading
            as="h1"
            color="#E1E6FB"
            fontSize="89px"
            fontWeight="700"
            fontFamily="Orbitron"
          >
            {heading}
          </Heading>
          <Text
            color="#777D99"
            fontSize="16px"
            fontWeight="500"
            textTransform="capitalize"
          >
            tagline will goes here
          </Text>
        </Box>
        <Button variant="primaryButton">connect wallet</Button>
      </Flex>
    </Center>
  );
};

export default Header;
