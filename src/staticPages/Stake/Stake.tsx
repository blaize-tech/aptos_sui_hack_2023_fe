import React, { useState } from 'react';
import {
  Box,
  Text,
  Grid,
  GridItem,
  Button,
  Flex,
  Select,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import { HtmlMeta } from '@look/components';
import { Tab, TabList } from '@look/components/Tabs';
import { AptCoin } from '@look/components/Icons';
import {
  useWallet,
} from "@aptos-labs/wallet-adapter-react";
import { ConnectWalletButton } from '../../layout/components/ConnectWalletButton';

export const Stake = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabChange = (newActive: number) => setActiveTab(newActive);

  return (
    <Box>
      <HtmlMeta title="Stake" />
      <Box as="section">
        <Grid templateColumns="1fr auto" gap="32px" alignItems="center" mb="40px">
          <Box>
            <Text as="h1" mb="24px">
              Stake
            </Text>
            <Text color="gray" fontWeight={500}>
              Tagline Will Goes Here
            </Text>
          </Box>
          <ConnectWalletButton />
        </Grid>
        <Box maxW="480px" m="0 auto">
          <TabList active={activeTab} onChange={handleTabChange}>
            <Tab title="Bond">
              <Box>
                {/*< ----- >*/}
                <Box
                  borderRadius="24px 24px 50px 50px"
                  p="32px 32px 40px"
                  bgColor="blue.darkLight"
                  mb="2px"
                >
                  <Flex
                    justifyContent="space-between"
                    fontWeight={700}
                    fontSize="12px"
                    letterSpacing="0.36px"
                    mb="12px"
                    color="gray"
                  >
                    <Text>$0</Text>
                    <Text>Balance: 0</Text>
                  </Flex>
                  <Flex
                    justifyContent="space-between"
                    fontFamily="orbitron"
                    fontSize="22px"
                    fontWeight={900}
                  >
                    <NumberInput defaultValue={0} precision={2}>
                      <NumberInputField
                        p={0}
                        border={0}
                        outline="none"
                        h="auto"
                        boxShadow="none"
                        fontFamily="orbitron"
                        fontSize="22px"
                        fontWeight={900}
                        placeholder="0.00"
                        _focus={{
                          boxShadow: 'none',
                        }}
                      />
                    </NumberInput>
                    <Flex alignItems="center" gap="28px">
                      <AptCoin />
                      APT
                    </Flex>
                  </Flex>
                </Box>
                {/*< ----- >*/}
                {/*< ----- >*/}
                <Box
                  borderRadius="50px 50px 24px 24px"
                  p="40px 32px 32px"
                  bgColor="blue.darkLight"
                  mb="32px"
                >
                  <Flex
                    justifyContent="space-between"
                    fontWeight={700}
                    fontSize="12px"
                    letterSpacing="0.36px"
                    mb="12px"
                    color="gray"
                  >
                    <Text>$0</Text>
                    <Text>Balance: 0</Text>
                  </Flex>
                  <Flex
                    justifyContent="space-between"
                    fontFamily="orbitron"
                    fontSize="22px"
                    fontWeight={900}
                  >
                    <NumberInput defaultValue={0} precision={2}>
                      <NumberInputField
                        p={0}
                        border={0}
                        outline="none"
                        h="auto"
                        boxShadow="none"
                        fontFamily="orbitron"
                        fontSize="22px"
                        fontWeight={900}
                        placeholder="0.00"
                        _focus={{
                          boxShadow: 'none',
                        }}
                      />
                    </NumberInput>
                    <Flex alignItems="center" gap="28px">
                      <AptCoin />
                      phAPT
                    </Flex>
                  </Flex>
                </Box>
                {/*< ----- >*/}
                <Select
                  placeholder="Select Validator"
                  bgColor="blue.darkLight"
                  h="64px"
                  border={0}
                  borderRadius="20px"
                  fontWeight={500}
                  color="gray"
                  mb="32px"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                <Grid
                  templateColumns="1fr auto"
                  gap="24px"
                  fontSize="14px"
                  fontWeight={700}
                  mb="41px"
                >
                  <GridItem>
                    <Text color="gray">cAPT to APT Rate</Text>
                  </GridItem>
                  <GridItem textAlign="right">
                    <Text>1 USDT = 1.121 APT</Text>
                  </GridItem>
                  <GridItem>
                    <Text color="gray">cAPT MCap</Text>
                  </GridItem>
                  <GridItem textAlign="right">
                    <Text>$37,190.872</Text>
                  </GridItem>
                  <GridItem>
                    <Text color="gray">APT in Vault</Text>
                  </GridItem>
                  <GridItem textAlign="right">
                    <Text>$92,440.793</Text>
                  </GridItem>
                </Grid>
                <Flex justifyContent="center">
                  <Button>Accept and Bond</Button>
                </Flex>
                {/*< ----- >*/}
              </Box>
            </Tab>
            <Tab title="Redeem">
              <Box>
                {/*< ----- >*/}
                <Box
                  borderRadius="24px 24px 50px 50px"
                  p="32px 32px 40px"
                  bgColor="blue.darkLight"
                  mb="2px"
                >
                  <Flex
                    justifyContent="space-between"
                    fontWeight={700}
                    fontSize="12px"
                    letterSpacing="0.36px"
                    mb="12px"
                    color="gray"
                  >
                    <Text>$0</Text>
                    <Text>Balance: 0</Text>
                  </Flex>
                  <Flex
                    justifyContent="space-between"
                    fontFamily="orbitron"
                    fontSize="22px"
                    fontWeight={900}
                  >
                    <NumberInput defaultValue={0} precision={2}>
                      <NumberInputField
                        p={0}
                        border={0}
                        outline="none"
                        h="auto"
                        boxShadow="none"
                        fontFamily="orbitron"
                        fontSize="22px"
                        fontWeight={900}
                        placeholder="0.00"
                        _focus={{
                          boxShadow: 'none',
                        }}
                      />
                    </NumberInput>
                    <Flex alignItems="center" gap="28px">
                      <AptCoin />
                      phAPT
                    </Flex>
                  </Flex>
                </Box>
                {/*< ----- >*/}
                {/*< ----- >*/}
                <Box
                  borderRadius="50px 50px 24px 24px"
                  p="40px 32px 32px"
                  bgColor="blue.darkLight"
                  mb="32px"
                >
                  <Flex
                    justifyContent="space-between"
                    fontWeight={700}
                    fontSize="12px"
                    letterSpacing="0.36px"
                    mb="12px"
                    color="gray"
                  >
                    <Text>$0</Text>
                    <Text>Balance: 0</Text>
                  </Flex>
                  <Flex
                    justifyContent="space-between"
                    fontFamily="orbitron"
                    fontSize="22px"
                    fontWeight={900}
                  >
                    <NumberInput defaultValue={0} precision={2}>
                      <NumberInputField
                        p={0}
                        border={0}
                        outline="none"
                        h="auto"
                        boxShadow="none"
                        fontFamily="orbitron"
                        fontSize="22px"
                        fontWeight={900}
                        placeholder="0.00"
                        _focus={{
                          boxShadow: 'none',
                        }}
                      />
                    </NumberInput>
                    <Flex alignItems="center" gap="28px">
                      <AptCoin />
                      APT
                    </Flex>
                  </Flex>
                </Box>
                {/*< ----- >*/}
                <Select
                  placeholder="Select Validator"
                  bgColor="blue.darkLight"
                  h="64px"
                  border={0}
                  borderRadius="20px"
                  fontWeight={500}
                  color="gray"
                  mb="32px"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                <Grid
                  templateColumns="1fr auto"
                  gap="24px"
                  fontSize="14px"
                  fontWeight={700}
                  mb="41px"
                >
                  <GridItem>
                    <Text color="gray">cAPT to APT Rate</Text>
                  </GridItem>
                  <GridItem textAlign="right">
                    <Text>1 USDT = 1.121 APT</Text>
                  </GridItem>
                  <GridItem>
                    <Text color="gray">cAPT MCap</Text>
                  </GridItem>
                  <GridItem textAlign="right">
                    <Text>$37,190.872</Text>
                  </GridItem>
                  <GridItem>
                    <Text color="gray">APT in Vault</Text>
                  </GridItem>
                  <GridItem textAlign="right">
                    <Text>$92,440.793</Text>
                  </GridItem>
                </Grid>
                <Flex justifyContent="center">
                  <Button>Accept and Bond</Button>
                </Flex>
                {/*< ----- >*/}
              </Box>
            </Tab>
          </TabList>
        </Box>
      </Box>
    </Box>
  );
};
