import aptos from "@utils/blockchain/FungibleAsset";
import {AptosAccount, HexString} from "aptos";

class FungibleAsset {
    contractAddress: string;
    symbol: string;

    constructor(contractAddress, symbol) {
        this.contractAddress = contractAddress;
        this.symbol = symbol;
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
        // signAndSubmitTransaction(playerAddress, payload).then(console.log);
    }

    async balanceOf(userAddress) {
        const response = await fetch(`${process.env.NEXT_APTOS_NODE_URL}/view`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'function': `${this.contractAddress}::base_fungible_asset::balance`,
                'type_arguments': [],
                'arguments': [userAddress]
            })
        });
        return (await response.json())[0];
    }

    getContractAddress(): string {
        return this.contractAddress;
    }

    getSymbol(): string {
        return this.symbol;
    }
}

export default FungibleAsset
