import aptos from "@utils/blockchain/aptos";
import "./hackaton_quick_env";
import Staking from "@utils/blockchain/Staking";
import Swap from "@utils/blockchain/Swap";
import FungibleAsset from "@utils/blockchain/FungibleAsset";


class BlockChainCore {

    initialized: boolean;
    staking: Staking;
    swap: Swap;
    assetsSymbols: Array<string>;
    assetsAddresses: Map<string, string>;
    assetsContracts: Array<FungibleAsset>;

    constructor() {
        this.initialized = false;
        this.assetsSymbols = new Array<string>();
        this.assetsContracts = new Array<FungibleAsset>();
        const symbols = [
            process.env.NEXT_TOKEN_MODULE_PHAPT_SYMBOL,
            process.env.NEXT_TOKEN_MODULE_PHZ_SYMBOL,
            process.env.NEXT_TOKEN_MODULE_PPHAPT_SYMBOL,
            process.env.NEXT_TOKEN_MODULE_YPHAPT_SYMBOL,
        ];
        for (let symbol of symbols) {
            if (symbol)
                this.assetsSymbols.push(symbol);
        }
        this.assetsAddresses = new Map<string, string>();
        this.assetsAddresses[process.env.NEXT_TOKEN_MODULE_PHAPT_SYMBOL || ""] = process.env.NEXT_TOKEN_MODULE_PHAPT_ADDRESS;
        this.assetsAddresses[process.env.NEXT_TOKEN_MODULE_PHZ_SYMBOL || ""] = process.env.NEXT_TOKEN_MODULE_PHZ_ADDRESS;
        this.assetsAddresses[process.env.NEXT_TOKEN_MODULE_PPHAPT_SYMBOL || ""] = process.env.NEXT_TOKEN_MODULE_PPHAPT_ADDRESS;
        this.assetsAddresses[process.env.NEXT_TOKEN_MODULE_YPHAPT_SYMBOL || ""] = process.env.NEXT_TOKEN_MODULE_YPHAPT_ADDRESS;
    }

    async InitAptos() {
        if (this.initialized)
            return;
        this.initialized = true;
        console.log("env", process.env);

        await aptos.updateClient(process.env.NEXT_APTOS_NODE_URL);

        this.staking = new Staking(process.env.NEXT_STAKING_ADDRESS);

        this.swap = new Swap(process.env.NEXT_SWAP_ADDRESS);

        this.assetsSymbols.forEach((asset) =>
            this.assetsContracts.push(new FungibleAsset(this.assetsAddresses[asset], asset)));
    }

    async UpdateInfo(store, userAddress: string) {
        for (const assetContract of this.assetsContracts) {
            const balance = await assetContract.balanceOf(userAddress);
            console.log("balance", assetContract.getSymbol(), balance);
            store.dispatch({type: "update-balance", asset: assetContract.getSymbol(), balance});
        }
        const aptosBalance = await aptos.getBalance(userAddress);
        store.dispatch({type: "update-balance", asset: "APT", balance: aptosBalance});
    }

    getStaking(): Staking {
        return this.staking;
    }

    getSwap(): Swap {
        return this.swap;
    }

    getAssetSymbols(): Array<string> {
        return this.assetsSymbols;
    }

    async getMetadata(asset): Promise<string> {
        let contract: any;
        for (let assetsContract of this.assetsContracts)
            if (assetsContract.getSymbol() == asset)
                contract = assetsContract;
        if (contract)
            return await contract.getMetadata();
        return "";
    }
}

const blockChainCore = new BlockChainCore();

export default blockChainCore;
