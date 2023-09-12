export interface PoolInfo {
    AssetName: string;
    Earned: string;
    Liquidity: string;
    APR: string;
    Multiplier: string;
    Available: string;
    Staked: string;
    Fee: string;
}


class Swap {
    contractAddress: string;
    appMetadataAddress: string;

    constructor(address) {
        this.contractAddress = address;
        // APT wrapped coin address
        this.appMetadataAddress = "0xb80640bab1799912b502206144510a5ff74aa65de181909d5efed07464818e08"
    }

    getPoolsInfos(): Array<PoolInfo> {
        let result = new Array<PoolInfo>();

        result.push({
            AssetName: "APT/PHZ",
            Earned: "12.55",
            Liquidity: "1212.5",
            APR: "22.77",
            Multiplier: "1.1",
            Available: "333.22",
            Staked: "111.55",
            Fee: "0.25",
        });
        result.push({
            AssetName: "APT/phApt",
            Earned: "12.55",
            Liquidity: "1212.5",
            APR: "0.55",
            Multiplier: "1.1",
            Available: "1005.22",
            Staked: "588.55",
            Fee: "0.15",
        });
        result.push({
            AssetName: "phApt/pPhApt",
            Earned: "5.55",
            Liquidity: "444.5",
            APR: "2.55",
            Multiplier: "2.1",
            Available: "555.22",
            Staked: "588.55",
            Fee: "0.10",
        });
        result.push({
            AssetName: "phApt/yPhApt",
            Earned: "5.55",
            Liquidity: "444.5",
            APR: "2.55",
            Multiplier: "2.1",
            Available: "555.22",
            Staked: "588.55",
            Fee: "0.5",
        });

        return result;
    }

    async swapAssetForCoin(wallet, tokenMetadata, amount) {
        const payload = {
            type: "entry_function_payload",
            function: `${this.contractAddress}::router::swap_asset_for_coin_entry`,
            type_arguments: ["0x1::aptos_coin::AptosCoin"],
            arguments: [amount.toString(),"1", tokenMetadata, false, wallet.account.address]
        };
        const options = {
            max_gas_amount: "10000",
            gas_unit_price: "100",
            expiration_timestamp_secs: new Date().getTime().toString(),
        };
        console.log('payload', payload, "options", options);
        return await wallet.signAndSubmitTransaction(payload, options).then(res => {
            return res.hash;
        });
    }

    async swapCoinForAsset(wallet, tokenMetadata, amount) {
        const payload = {
            type: "entry_function_payload",
            function: `${this.contractAddress}::router::swap_coin_for_asset_entry`,
            type_arguments: ["0x1::aptos_coin::AptosCoin"],
            arguments: [amount.toString(),"1", tokenMetadata, false, wallet.account.address]
        };
        const options = {
            max_gas_amount: "10000",
            gas_unit_price: "100",
            expiration_timestamp_secs: new Date().getTime().toString(),
        };
        console.log('payload', payload, "options", options);
        return await wallet.signAndSubmitTransaction(payload, options).then(res => {
            return res.hash;
        });
    }

    async estimateAssetForAsset(amountIn, tokenFrom, tokenTo): Promise<number> {
        const response = await fetch(`${process.env.NEXT_APTOS_NODE_URL}/view`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'function': `${this.contractAddress}::router::get_amount_out`,
                'type_arguments': [],
                'arguments': [amountIn.toString(), tokenFrom, tokenTo]
            })
        });
        let [out, fee] = await response.json();
        return Number.parseInt(out);
    }

    async estimateCoinForAsset(amountIn, tokenTo): Promise<number> {
        return this.estimateAssetForAsset(amountIn, this.appMetadataAddress, tokenTo);
    }

    async estimateAssetForCoin(amountIn, tokenFrom): Promise<number> {
        return this.estimateAssetForAsset(amountIn, tokenFrom, this.appMetadataAddress);
    }
}

export default Swap
