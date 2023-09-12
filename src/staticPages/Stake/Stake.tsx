import React, { useState, useEffect } from 'react';
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
import blockChainCore from "@utils/blockchain";
import { PRECISION, PRICE } from '@utils/blockchain/aptos';
import {useStore} from "@utils/store";

export const Stake = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [stakeAmount, setStakeAmount] = useState<number>(0);
  const [withdrawAmount, setWithdrawAmount] = useState<number>(0);

  const handleTabChange = (newActive: number) => setActiveTab(newActive);

  const wallet = useWallet();
  const store = useStore();

  const aptosBalance = store.state.balances["APT"] || "0";
  const phAPTBalance = store.state.balances["phApt"] || "0";

  useEffect(() => {
    if (!!wallet.account && !!wallet.account.address)
      blockChainCore.UpdateInfo(store, wallet.account.address).catch(console.error);
  }, [wallet.connected, wallet.account]);

  const requestUpdateInfo = () => {
    setTimeout(()=>{
      if (!!wallet.account && !!wallet.account.address)
        blockChainCore.UpdateInfo(store, wallet.account.address).catch(console.error);
    }, 3000)
  };

  const stakeAPt = async () => {
    let value = stakeAmount * PRECISION;
    console.log("value", value);
    const hash = await blockChainCore.getStaking().stakeApt(wallet, value);
    console.log("|hash", hash)
    requestUpdateInfo();
  };

  const withdrawAPt = async () => {
    let value = withdrawAmount * PRECISION;
    const hash = await blockChainCore.getStaking().withdrawApt(wallet, value);
    requestUpdateInfo();
  };

  const onChaneStakeAmount = (val) =>{
    setStakeAmount(val.target.value);
  };

  const onChaneWithdrawAmount = (val) =>{
    setWithdrawAmount(val.target.value);
  };

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
                  borderRadius="24px 24px 24px 24px"
                  p="32px"
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
                    <Text >${(PRICE * stakeAmount).toFixed(2)}</Text>
                    <Text>Balance: {aptosBalance/PRECISION}</Text>
                  </Flex>
                  <Flex
                    justifyContent="space-between"
                    fontFamily="orbitron"
                    fontSize="22px"
                    fontWeight={900}
                  >
                    <NumberInput defaultValue={0} precision={2} value={stakeAmount}>
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
                        onChange={onChaneStakeAmount}
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
                  borderRadius="24px 24px 24px 24px"
                  p="32px"
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
                    <Text>${(PRICE * stakeAmount).toFixed(2)}</Text>
                    <Text>Balance: {phAPTBalance/PRECISION}</Text>
                  </Flex>
                  <Flex
                    justifyContent="space-between"
                    fontFamily="orbitron"
                    fontSize="22px"
                    fontWeight={900}
                  >
                    <NumberInput defaultValue={0} precision={2} value={stakeAmount}>
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
                        onChange={onChaneStakeAmount}
                      />
                    </NumberInput>
                    <Flex alignItems="center" gap="28px">
                      <AptCoin />
                      phAPT
                    </Flex>
                  </Flex>
                </Box>
                {/*< ----- >*/}
                {/*<Select*/}
                {/*  placeholder="Select Validator"*/}
                {/*  bgColor="blue.darkLight"*/}
                {/*  h="64px"*/}
                {/*  border={0}*/}
                {/*  borderRadius="20px"*/}
                {/*  fontWeight={500}*/}
                {/*  color="gray"*/}
                {/*  mb="32px"*/}
                {/*>*/}
                {/*  <option value="option1">Option 1</option>*/}
                {/*  <option value="option2">Option 2</option>*/}
                {/*  <option value="option3">Option 3</option>*/}
                {/*</Select>*/}
                <Grid
                    templateColumns="1fr auto"
                    gap="24px"
                    fontSize="14px"
                    fontWeight={700}
                    mb="41px"
                >
                  <GridItem>
                    <Text color="gray">phApt to APT Rate</Text>
                  </GridItem>
                  <GridItem textAlign="right">
                    <Text>1 phApt = 1.0001 APT</Text>
                  </GridItem>
                  <GridItem>
                    <Text color="gray">phApt MCap</Text>
                  </GridItem>
                  <GridItem textAlign="right">
                    <Text>$5,379,388,167</Text>
                  </GridItem>
                  <GridItem>
                    <Text color="gray">APT in Vault</Text>
                  </GridItem>
                  <GridItem textAlign="right">
                    <Text>{92440.793 + phAPTBalance / PRECISION}</Text>
                  </GridItem>
                </Grid>
                <Flex justifyContent="center">
                  <Button onClick={stakeAPt}>Accept and Bond</Button>
                </Flex>
                {/*< ----- >*/}
              </Box>
            </Tab>
            <Tab title="Redeem">
              <Box>
                <Box
                    borderRadius="24px 24px 24px 24px"
                    p="32px"
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
                    <Text>${(PRICE * withdrawAmount).toFixed(2)}</Text>
                    <Text>Balance: {phAPTBalance/PRECISION}</Text>
                  </Flex>
                  <Flex
                      justifyContent="space-between"
                      fontFamily="orbitron"
                      fontSize="22px"
                      fontWeight={900}
                  >
                    <NumberInput defaultValue={0} precision={2} value={withdrawAmount}>
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
                          onChange={onChaneWithdrawAmount}
                      />
                    </NumberInput>
                    <Flex alignItems="center" gap="28px">
                      <AptCoin />
                      phAPT
                    </Flex>
                  </Flex>
                </Box>
                {/*< ----- >*/}
                <Box
                    borderRadius="24px 24px 24px 24px"
                    p="32px"
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
                    <Text>${(PRICE * withdrawAmount).toFixed(2)}</Text>
                    <Text>Balance: {aptosBalance/PRECISION}</Text>
                  </Flex>
                  <Flex
                      justifyContent="space-between"
                      fontFamily="orbitron"
                      fontSize="22px"
                      fontWeight={900}
                  >
                    <NumberInput defaultValue={0} precision={2} value={withdrawAmount}>
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
                          onChange={onChaneWithdrawAmount}
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
                {/*< ----- >*/}
                {/*<Select*/}
                {/*  placeholder="Select Validator"*/}
                {/*  bgColor="blue.darkLight"*/}
                {/*  h="64px"*/}
                {/*  border={0}*/}
                {/*  borderRadius="20px"*/}
                {/*  fontWeight={500}*/}
                {/*  color="gray"*/}
                {/*  mb="32px"*/}
                {/*>*/}
                {/*  <option value="option1">Option 1</option>*/}
                {/*  <option value="option2">Option 2</option>*/}
                {/*  <option value="option3">Option 3</option>*/}
                {/*</Select>*/}
                <Grid
                    templateColumns="1fr auto"
                    gap="24px"
                    fontSize="14px"
                    fontWeight={700}
                    mb="41px"
                >
                  <GridItem>
                    <Text color="gray">phApt to APT Rate</Text>
                  </GridItem>
                  <GridItem textAlign="right">
                    <Text>1 phApt = 1.0001 APT</Text>
                  </GridItem>
                  <GridItem>
                    <Text color="gray">phApt MCap</Text>
                  </GridItem>
                  <GridItem textAlign="right">
                    <Text>$5,379,388,167</Text>
                  </GridItem>
                  <GridItem>
                    <Text color="gray">APT in Vault</Text>
                  </GridItem>
                  <GridItem textAlign="right">
                    <Text>{92440.793 + phAPTBalance / PRECISION}</Text>
                  </GridItem>
                </Grid>
                <Flex justifyContent="center">
                  <Button onClick={withdrawAPt}>Accept and Redeem</Button>
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
