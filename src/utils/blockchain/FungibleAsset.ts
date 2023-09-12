import aptos from "@utils/blockchain/FungibleAsset";
import {AptosAccount, HexString} from "aptos";

class FungibleAsset {
    address: string;
    wallet: any;
    private eventHandler: any;

    constructor(address, wallet, eventHandler) {
        this.address = address;
        this.wallet = wallet;
        this.eventHandler = eventHandler;
    }

    async transfer(playerAddress, to, amount) {
        const payload = {
            type: "entry_function_payload",
            function: `${this.address}::base_fungible_asset::transfer`,
            type_arguments: [],
            arguments: [to.toString(), amount.toString()]
        };
        console.log('payload', payload)
        await this.wallet.signAndSubmitTransaction(playerAddress, payload).then(console.log);
    }

    async balanceOf(playerAddress, userAddress) {
        return "24323423"
    }

    handleEvents() {
    }
}

export default FungibleAsset
