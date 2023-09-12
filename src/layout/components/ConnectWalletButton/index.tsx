import React, { useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { useStore } from '@utils/store';
import { ConnectWallet, InitAptos } from '@utils/blockchain';

export const ConnectWalletButton = () => {
  const store = useStore();

  const { dispatch, state } = store;

  useEffect(() => {
    InitAptos(store).catch(console.error);
  }, []);

  const handleConnectWallet = async () => {
    await ConnectWallet(store);
  };

  return <Button onClick={handleConnectWallet}>Connect Wallet</Button>;
};
