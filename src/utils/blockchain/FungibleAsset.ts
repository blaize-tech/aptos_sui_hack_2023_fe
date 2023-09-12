import aptos from "@utils/blockchain/FungibleAsset";
import {AptosAccount, HexString} from "aptos";

class FungibleAsset {
    contractAddress: string;
    private eventHandler: any;

    constructor(contractAddress, walletWrapper, eventHandler) {
        this.contractAddress = contractAddress;
        this.eventHandler = eventHandler;
    }

    async transfer(wallet, playerAddress, to, amount) {
        const payload = {
            type: "entry_function_payload",
            function: `${this.contractAddress}::base_fungible_asset::transfer`,
            type_arguments: [],
            arguments: [to.toString(), amount.toString()]
        };
        const options = {
            max_gas_amount: "10000",
            gas_unit_price: "100",
            expiration_timestamp_secs: new Date().getTime().toString(),
        };
        return await wallet.signAndSubmit(payload, options).then(res => {
            return res.result.hash;
        });
        signAndSubmitTransaction(playerAddress, payload).then(console.log);
    }

    async balanceOf(playerAddress, userAddress) {
        return "24323423"
    }

    handleEvents() {
    }
}

export default FungibleAsset
