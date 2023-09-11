'use client';
import {useState} from "react";

const TestPage: React.FC = () => {
    const {stakeAmount, setStakeAmount} = useState();
    const stake = () => {
        console.log("stake");
    };
    const unstake = () => {
        console.log("unstake");
    };
    return (
        <div style={{width: "800px", height: "1000px", backgroundColor: "#999", position: "absolute"}}>
            <text>{"sdfsd"}</text>
            <br/>
            <text>{"sdfsd"}</text>
            <br/>
            <text>{"sdfsd"}</text>
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
