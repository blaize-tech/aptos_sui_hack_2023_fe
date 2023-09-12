import React, {useEffect, useState} from 'react';
import {
  Box, Button, Grid, Text, HStack, GridItem, Select, Flex,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import {HtmlMeta} from '@look/components';
import {Tab, TabList} from '@look/components/Tabs';
import { ConnectWalletButton } from '../../layout/components/ConnectWalletButton';
import {useStore} from "@utils/store";
import blockChainCore from "@utils/blockchain";
import {
  useWallet,
} from "@aptos-labs/wallet-adapter-react";
import { PRECISION, toDisplayValue } from '@utils/blockchain/aptos';

export const Split = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [stakeAmount, setStakeAmount] = useState<number>(0);
  const [withdrawAmount, setWithdrawAmount] = useState<number>(0);

  const handleTabChange = (newActive: number) => setActiveTab(newActive);

  const wallet = useWallet();
  const store = useStore();

  const aptosBalance = store.state.balances["APT"] || "0";
  const phAPTBalance = store.state.balances["phApt"] || "0";
  const pPhAptBalance = store.state.balances["pPhApt"] || "0";
  const yPhAptBalance = store.state.balances["yPhApt"] || "0";

  const requestUpdateInfo = () => {
    setTimeout(()=>{
      if (!!wallet.account && !!wallet.account.address)
        blockChainCore.UpdateInfo(store, wallet.account.address).catch(console.error);
    }, 3000)
  };

  useEffect(() => {
    requestUpdateInfo()
  }, [wallet.connected, wallet.account]);

    const stakePhAPt = async () => {
    let value = stakeAmount * Math.pow(10, 8);
    console.log("value", value);
    const hash = await blockChainCore.getStaking().stakePhApt(wallet, value);
    console.log("|hash", hash)
    requestUpdateInfo();
  };

  const withdrawPhAPt = async () => {
    let value = withdrawAmount * Math.pow(10, 8);
    const hash = await blockChainCore.getStaking().withdrawPhApt(wallet, value);
    console.log("|hash", hash)
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
          <ConnectWalletButton />
        </Grid>
        <HStack mb="64px">
          <Box bgColor="blue.darkLight" borderRadius="24px" p="32px 32px 28px">
            <Text color="gray" fontSize="12px" mb="6px" fontWeight={700}>
              Total APT in Vault
            </Text>
            <Text fontFamily="orbitron" fontSize="22px" fontWeight={900}>
              {92440.793 + phAPTBalance / PRECISION} APT
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
                    Available: {toDisplayValue(phAPTBalance)}
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
                    <Select
                      border={0}
                      borderRadius="16px"
                      fontWeight={500}
                      color="gray"
                      w="auto"
                      pr="10px"
                    >
                      <option value="option2">phAPT</option>
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
                        // onChange={onChaneStakeAmount}
                      />
                    </NumberInput>
                    <Select
                      border={0}
                      borderRadius="16px"
                      fontWeight={500}
                      color="gray"
                      w="auto"
                      pr="10px"
                    >
                      <option value="option2">pPhAPT</option>
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
                        // onChange={onChaneStakeAmount}
                      />
                    </NumberInput>
                    <Select
                      border={0}
                      borderRadius="16px"
                      fontWeight={500}
                      color="gray"
                      w="auto"
                      pr="10px"
                    >
                      <option value="option3">yPhAPT</option>
                    </Select>
                  </Grid>
                </GridItem>
              </Grid>
              <Flex justifyContent="center">
                <Button onClick={stakePhAPt}>Accept and Split</Button>
              </Flex>
            </Box>
          </Tab>
          <Tab title="Bond">
            <Text py="70px" textAlign="center" fontFamily="orbitron"
                  fontSize="50px" opacity="0.3"
                  fontWeight={900}>- Coming soon -</Text>
          </Tab>
          <Tab title="Merge">
            <Box>
              <Text as="h3" textAlign="center" mb="48px">
                Select Amount and Asset to Merge
              </Text>
              <Grid templateColumns="repeat(3, 1fr)" gap="48px" mb="150px">
                <GridItem>
                  {/*<Text color="gray" fontSize="12px" mb="24px" fontWeight={700}>*/}
                  {/*  Principal Token Amount*/}
                  {/*</Text>*/}
                  <Text color="gray" fontSize="12px" mb="24px" fontWeight={700}>
                    Available: {toDisplayValue(pPhAptBalance)}
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
                    <Select
                        border={0}
                        borderRadius="16px"
                        fontWeight={500}
                        color="gray"
                        w="auto"
                        pr="10px"
                    >
                      <option value="option2">pPhAPT</option>
                    </Select>
                  </Grid>
                </GridItem>
                <GridItem>
                  {/*<Text color="gray" fontSize="12px" mb="24px" fontWeight={700}>*/}
                  {/*  Yield Token Amount*/}
                  {/*</Text>*/}
                  <Text color="gray" fontSize="12px" mb="24px" fontWeight={700}>
                    Available: {toDisplayValue(yPhAptBalance)}
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
                    <Select
                        border={0}
                        borderRadius="16px"
                        fontWeight={500}
                        color="gray"
                        w="auto"
                        pr="10px"
                    >
                      <option value="option3">yPhAPT</option>
                    </Select>
                  </Grid>
                </GridItem>
                <GridItem>
                  <Text color="gray" fontSize="12px" mb="24px" fontWeight={700}>
                    Phizen Token Amount
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
                        // onChange={onChaneStakeAmount}
                      />
                    </NumberInput>
                    <Select
                        border={0}
                        borderRadius="16px"
                        fontWeight={500}
                        color="gray"
                        w="auto"
                        pr="10px"
                    >
                      <option value="option2">phAPT</option>
                    </Select>
                  </Grid>
                </GridItem>
              </Grid>
              <Flex justifyContent="center">
                <Button onClick={withdrawPhAPt}>Accept and merge</Button>
              </Flex>
            </Box>
          </Tab>
          <Tab title="Redeem">
            <Text py="70px" textAlign="center" fontFamily="orbitron"
                  fontSize="50px" opacity="0.3"
                  fontWeight={900}>- Coming soon -</Text>
          </Tab>
        </TabList>
      </Box>
    </Box>
  );
};
