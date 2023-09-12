import aptos from "@utils/blockchain/aptos";
import "./hackaton_quick_env";
import Staking from "@utils/blockchain/Staking";


class BlockChainCore {

    initialized: boolean;
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

        this.staking = new Staking(process.env.NEXT_STAKING_ADDRESS);
    }

    async UpdateInfo(store) {

    }

    getStaking(): Staking {
        return this.staking;
    }
}

const blockChainCore = new BlockChainCore();

export default blockChainCore;
