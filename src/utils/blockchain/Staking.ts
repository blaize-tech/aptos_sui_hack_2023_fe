class Staking {
    contractAddress: string;

    constructor(address) {
        this.contractAddress = address;
    }

    async stakeApt(wallet, amount) {
        const payload = {
            type: "entry_function_payload",
            function: `${this.contractAddress}::staking::stake_apt`,
            type_arguments: [],
            arguments: [amount.toString()]
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
}

export default Staking
