import React, { useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { useStore } from '@utils/store';
import { InitAptos } from '@utils/blockchain';
import {
  useWallet,
} from "@aptos-labs/wallet-adapter-react";

export const ConnectWalletButton = () => {
  const { wallets, connect } = useWallet();
  const store = useStore();

  const { dispatch, state } = store;

  useEffect(() => {
    InitAptos(store).catch(console.error);
  }, []);

  const handleConnectWallet = async () => {
    console.log("wallets", wallets);
    // connect(wallets.indexOf(0));
  };

  return <Button onClick={handleConnectWallet}>Connect Wallet</Button>;
};
