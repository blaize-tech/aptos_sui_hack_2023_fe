import aptos from "@utils/blockchain/aptos";
import "./hackaton_quick_env";
import Staking from "@utils/blockchain/Staking";
import Wallet from "@utils/blockchain/wallet";


class BlockChainCore {

    initialized: boolean;
    wallet: Wallet;
    staking: Staking;

    constructor() {
        this.initialized = false;
    }

    async InitAptos() {
        if (this.initialized)
            return;
        this.initialized = true;
        console.log("env", process.env);

        await aptos.updateClient(process.env.NEXT_APTOS_NODE_URL);

        this.wallet = new Wallet();

        this.staking = new Staking(process.env.NEXT_STAKING_ADDRESS, this.wallet);
    }

    async UpdateInfo(store) {

    }

    getStaking(): Staking {
        return this.staking;
    }
}

const blockChainCore = new BlockChainCore();

export default blockChainCore;
