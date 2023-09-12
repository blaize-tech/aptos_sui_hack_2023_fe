import React, { useState } from 'react';
import { Box, Button, Grid, Text, HStack } from '@chakra-ui/react';
import { HtmlMeta } from '@look/components';
import { Tab, TabList } from '@look/components/Tabs';

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
              <Text as="h3">Split</Text>
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
