import React, { useState } from 'react';
import { Box, Button, Grid, Text, HStack, GridItem, Select, Flex } from "@chakra-ui/react";
import { HtmlMeta } from '@look/components';
import { Tab, TabList } from '@look/components/Tabs';
import { AptCoin } from '@look/components/Icons';

export const Split = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabChange = (newActive: number) => setActiveTab(newActive);

  return (
    <Box>
      <HtmlMeta title="Split" />
      <Box as="section">
        <Grid templateColumns="1fr auto" gap="32px" alignItems="center" mb="64px">
          <Box>
            <Text as="h1" mb="24px">
              Split
            </Text>
            <Text color="gray" fontWeight={500}>
              Tagline Will Goes Here
            </Text>
          </Box>
          <Button>Connect Wallet</Button>
        </Grid>
        <HStack mb="64px">
          <Box bgColor="blue.darkLight" borderRadius="24px" p="32px 32px 28px">
            <Text color="gray" fontSize="12px" mb="6px" fontWeight={700}>
              Total APT in Vault
            </Text>
            <Text fontFamily="orbitron" fontSize="22px" fontWeight={900}>
              0 APT
            </Text>
          </Box>
        </HStack>
        <TabList active={activeTab} onChange={handleTabChange}>
          <Tab title="Split">
            <Box>
              <Text as="h3" textAlign="center" mb="48px">
                Select Amount and Asset to Split
              </Text>
              <Grid templateColumns="repeat(3, 1fr)" gap="48px" mb="150px">
                <GridItem>
                  <Text color="gray" fontSize="12px" mb="24px" fontWeight={700}>
                    Available: 0
                  </Text>
                  <Grid
                    templateColumns="1fr auto"
                    bgColor="blue.darkLight"
                    borderRadius="16px"
                    alignItems="center"
                    mb="32px"
                    h="64px"
                    pl="20px"
                  >
                    0.00
                    <Select
                      border={0}
                      borderRadius="16px"
                      fontWeight={500}
                      color="gray"
                      w="auto"
                      pr="10px"
                    >
                      <option value="option1">APT</option>
                      <option value="option2">phAPT</option>
                      <option value="option3">yphAPT</option>
                    </Select>
                  </Grid>
                </GridItem>
                <GridItem>
                  <Text color="gray" fontSize="12px" mb="24px" fontWeight={700}>
                    Principal Token Amount
                  </Text>
                  <Grid
                    templateColumns="1fr auto"
                    bgColor="blue.darkLight"
                    borderRadius="16px"
                    alignItems="center"
                    mb="32px"
                    h="64px"
                    pl="20px"
                  >
                    0.00
                    <Select
                      border={0}
                      borderRadius="16px"
                      fontWeight={500}
                      color="gray"
                      w="auto"
                      pr="10px"
                    >
                      <option value="option1">APT</option>
                      <option value="option2">phAPT</option>
                      <option value="option3">yphAPT</option>
                    </Select>
                  </Grid>
                </GridItem>
                <GridItem>
                  <Text color="gray" fontSize="12px" mb="24px" fontWeight={700}>
                    Yield Token Amount
                  </Text>
                  <Grid
                    templateColumns="1fr auto"
                    bgColor="blue.darkLight"
                    borderRadius="16px"
                    alignItems="center"
                    mb="32px"
                    h="64px"
                    pl="20px"
                  >
                    0.00
                    <Select
                      border={0}
                      borderRadius="16px"
                      fontWeight={500}
                      color="gray"
                      w="auto"
                      pr="10px"
                    >
                      <option value="option1">APT</option>
                      <option value="option2">phAPT</option>
                      <option value="option3">yphAPT</option>
                    </Select>
                  </Grid>
                </GridItem>
              </Grid>
              <Flex justifyContent="center">
                <Button>Accept and Split</Button>
              </Flex>
            </Box>
          </Tab>
          <Tab title="Bond">Bond</Tab>
          <Tab title="Merge">Merge</Tab>
          <Tab title="Redeem">Redeem</Tab>
        </TabList>
      </Box>
    </Box>
  );
};
