import { Box, Container, Grid } from '@chakra-ui/react';

import Sidebar from './components/Sidebar';
import { StoreProvider } from "@utils/store";
import { AutoConnectProvider } from "./components/AutoConnectProvider";
import {
    AptosWalletAdapterProvider,
} from "@aptos-labs/wallet-adapter-react";
import { FewchaWallet } from "fewcha-plugin-wallet-adapter";
import { FlipperWallet } from "@flipperplatform/wallet-adapter-plugin";
import { MartianWallet } from "@martianwallet/aptos-wallet-adapter";
import { NightlyWallet } from "@nightlylabs/aptos-wallet-adapter-plugin";
import { OpenBlockWallet } from "@openblockhq/aptos-wallet-adapter";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { PontemWallet } from "@pontem/wallet-adapter-plugin";
import { RiseWallet } from "@rise-wallet/wallet-adapter";
import { TokenPocketWallet } from "@tp-lab/aptos-wallet-adapter";
import { TrustWallet } from "@trustwallet/aptos-wallet-adapter";
import { WelldoneWallet } from "@welldone-studio/aptos-wallet-adapter";
import { WalletKitProvider } from "@mysten/wallet-kit";
import blockChainCore from "@utils/blockchain";


const Layout = ({ children }: { children: JSX.Element }) => {

    blockChainCore.InitAptos().catch(console.error);

    const wallets = [
        new FewchaWallet(),
        new FlipperWallet(),
        new MartianWallet(),
        new NightlyWallet(),
        new OpenBlockWallet(),
        new PetraWallet(),
        new PontemWallet(),
        new RiseWallet(),
        new TokenPocketWallet(),
        new TrustWallet(),
        new WelldoneWallet(),
    ];

    return (
        <AptosWalletAdapterProvider
            plugins={wallets}
        >
            <WalletKitProvider>
                <AutoConnectProvider>
                    <StoreProvider>
                        <Box py="88px">
                            <Container>
                                <Grid templateColumns="auto 1fr" borderRadius="40px" bgColor="blue.dark">
                                    <Sidebar />
                                    <Box
                                        bgImage="/assets/images/bg_content.png"
                                        borderRadius="40px 0 0 40px"
                                        bgSize="cover"
                                        p="80px"
                                    >
                                        {children}
                                    </Box>
                                </Grid>
                            </Container>
                        </Box>
                    </StoreProvider>
                </AutoConnectProvider>
            </WalletKitProvider>
        </AptosWalletAdapterProvider>
    );
};
export default Layout;
