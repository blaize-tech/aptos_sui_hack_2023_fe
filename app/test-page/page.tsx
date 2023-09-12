"use client";
import Wallet from "../blockchain/wallet";

const TestPage = () => {
    const useState = (defaultValue) => {
        let value = defaultValue;
        return [
            () => {
                return value;
            },
            (newValue) => {
                value = newValue;
            }
        ]
    };
    const [wallet, setWallet] = useState<any>(undefined);
    const [stakeAmount, setStakeAmount] = useState("");
    const [PHZ, setBalancePHZ] = useState(0);
    const [phApt, setBalancephApt] = useState(0);
    const [yPhApt, setBalanceyPhApt] = useState(0);
    const [pPhApt, setBalancepPhApt] = useState(0);
    const updateInfos = async () => {

    };

    const connectWallet = async () => {
        console.log("wallet, setWallet", wallet, setWallet)
        let w = new Wallet();
        await w.connect();
        setWallet(w);
        await updateInfos();
        window.alert("dsfsd")
    };
    const stake = () => {
        console.log("stake");
    };
    const unstake = () => {
        console.log("unstake");
    };
    return (
        <div style={{width: "800px", height: "1000px", backgroundColor: "#999", position: "absolute"}}>
            <button style={{backgroundColor: "#555", margin: "10px"}} onClick={connectWallet}>connect wallet</button>
            <br/>
            <text>address: {wallet && wallet.getAccount ? wallet.getAccount() : "0x"}</text>
            <br/>
            <text>balance PHZ: {PHZ}</text>
            <br/>
            <text>balance phApt: {phApt}</text>
            <br/>
            <text>balance yPhApt: {yPhApt}</text>
            <br/>
            <text>balance pPhApt: {pPhApt}</text>
            <br/>
            <text>stake amount:</text>
            <input type="text" value={stakeAmount}/> <br/>
            <button style={{backgroundColor: "#555", margin: "10px"}} onClick={stake}>stake</button>
            <button style={{backgroundColor: "#555", margin: "10px"}} onClick={unstake}>unstake</button>
            <br/>
        </div>
    );
};

export default TestPage;
