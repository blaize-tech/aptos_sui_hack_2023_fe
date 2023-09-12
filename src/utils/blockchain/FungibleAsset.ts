import aptos from "@utils/blockchain/FungibleAsset";
import {AptosAccount, HexString} from "aptos";

class FungibleAsset {
    contractAddress: string;
    symbol: string;

    constructor(contractAddress, symbol) {
        this.contractAddress = contractAddress;
        this.symbol = symbol;
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

    async getMetadata() {
        const response = await fetch(`${process.env.NEXT_APTOS_NODE_URL}/view`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'function': `${this.contractAddress}::base_fungible_asset::get_metadata`,
                'type_arguments': [],
                'arguments': []
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
