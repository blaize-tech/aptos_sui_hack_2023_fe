import aptos from "@utils/blockchain/FungibleAsset";
import {AptosAccount, HexString} from "aptos";

class Staking {
    address: string;
    wallet: any;

    constructor(address, wallet) {
        this.address = address;
        this.wallet = wallet;
    }

    async stakeApt(amount) {
        const payload = {
            type: "entry_function_payload",
            function: `${this.address}::staking::stake_apt`,
            type_arguments: [],
            arguments: [amount.toString()]
        };
        console.log('payload', payload);
        await this.wallet.signAndSubmitTransaction(this.wallet.getAccount(), payload).then(console.log);
    }
}

export default Staking
