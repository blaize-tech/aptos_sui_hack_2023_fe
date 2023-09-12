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


class Staking {
    contractAddress: string;

    constructor(address) {
        this.contractAddress = address;
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
}

export default Staking
