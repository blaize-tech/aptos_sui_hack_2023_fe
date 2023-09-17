import { TransactionBlock } from '@mysten/sui.js';
import { LAMPORT, OBJECT_RECORD } from '../'
import { useEffect, useState } from 'react';
import { Connection, JsonRpcProvider } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import BigNumber from 'bignumber.js';

const getProvider = () => {
	return new JsonRpcProvider(
		new Connection({
			fullnode: 'https://wallet-rpc.devnet.sui.io/',
			websocket: 'wss://fullnode.devnet.sui.io:443',
			faucet: 'https://faucet.devnet.sui.io/gas',
		}))
}

export const useGetBalance = (account: string, actionCount: number) => {
	const [data, setAccountBalance] = useState<string>('0');

	useEffect(() => {
		const getbalance = async () => {
			if (account === OBJECT_RECORD.AddressZero)
				setAccountBalance('0');
			else {
				const provider = getProvider();
				let accountBalance = await provider.getBalance({ owner: account });
				let balanceValue = BigNumber(accountBalance?.totalBalance).dividedBy(LAMPORT).toFixed(3) || '0'
				setAccountBalance(balanceValue);
			}
		}
		getbalance();
	}, [account, actionCount])
	return data;
}

export const useStakingMethods = () => {
	const { signAndExecuteTransactionBlock } = useWalletKit();

	const staking = async (amount) => {
		const txb = new TransactionBlock();
		const [coin] = txb.splitCoins(txb.gas, [txb.pure(amount)]);
		const packageObjectId = OBJECT_RECORD.PACKAGE_ID;
		txb.moveCall({
			target: `${packageObjectId}::interface::stake`,
			arguments: [
				txb.object(OBJECT_RECORD.PZH_STORAGE),
				txb.object(OBJECT_RECORD.PZH_BALANCE),
				txb.object(OBJECT_RECORD.PZH_ACCOUNT_STORAGE),
				txb.object(OBJECT_RECORD.IPX_STORAGE),
				txb.object(OBJECT_RECORD.CLOCK_OBJECT),
				coin,
			],
			typeArguments: [],
		});
		txb.setGasBudget(300000000);
		
		const tx = await signAndExecuteTransactionBlock({
			transactionBlock: txb,
			requestType: 'WaitForEffectsCert',
			options: { showEffects: true },
		});
		return tx;
	};

	const mintTokens = async wallet => {
		let txb = new TransactionBlock();
		txb.moveCall({
			target: `0x2::coin::mint_and_transfer`,
			typeArguments: [ process.env.PPSUI_TYPE ],
			arguments: [
				txb.object(process.env.PPSUI_TREASURY),
				txb.pure(10000000000),
				txb.object(wallet)
			]
		});

		txb.setGasBudget(300000000);
		await signAndExecuteTransactionBlock({
			transactionBlock: txb,
			requestType: 'WaitForEffectsCert',
			options: { showEffects: true },
		});

		txb = new TransactionBlock();
		txb.moveCall({
			target: `0x2::coin::mint_and_transfer`,
			typeArguments: [ process.env.YPSUI_TYPE ],
			arguments: [
				txb.object(process.env.YPSUI_TREASURY),
				txb.pure(10000000000),
				txb.object(wallet)
			]
		});

		txb.setGasBudget(300000000);
		await signAndExecuteTransactionBlock({
			transactionBlock: txb,
			requestType: 'WaitForEffectsCert',
			options: { showEffects: true },
		});

	};

	const generatePool = async () => {
		let txb = new TransactionBlock();
		txb.moveCall({
			target: `${process.env.SPLIT_ID}::split::generate_pool`,
			typeArguments: [ 
				process.env.PPSUI_TYPE,
				process.env.YPSUI_TYPE 
			],
			arguments: []
		});

		txb.setGasBudget(300000000);
		await signAndExecuteTransactionBlock({
			transactionBlock: txb,
			requestType: 'WaitForEffectsCert',
			options: { showEffects: true },
		});
	}

	const createPocket = async () => {
		let txb = new TransactionBlock();
		txb.moveCall({
			target: `${process.env.SPLIT_ID}::split::create_pocket`,
			typeArguments: [ ],
			arguments: []
		});

		txb.setGasBudget(300000000);
		await signAndExecuteTransactionBlock({
			transactionBlock: txb,
			requestType: 'WaitForEffectsCert',
			options: { showEffects: true },
		});
	}

	const mergeCoins = async (pPSUI, yPSUI) => {
		let txb = new TransactionBlock();
		txb.moveCall({
			target: `${process.env.SPLIT_ID}::split::deposit_partly`,
			typeArguments: [
				process.env.PPSUI_TYPE,
				process.env.YPSUI_TYPE 
			],
			arguments: [
				txb.object(process.env.POOL),
				txb.makeMoveVec({ objects: [txb.object(process.env.PPSUI_ID)] }),
				txb.makeMoveVec({ objects: [txb.object(process.env.YPSUI_ID)] }),
				txb.pure(pPSUI),
				txb.pure(yPSUI),
				txb.object(process.env.POCKED)
			]
		});

		txb.setGasBudget(300000000);
		return await signAndExecuteTransactionBlock({
			transactionBlock: txb,
			requestType: 'WaitForEffectsCert',
			options: { showEffects: true },
		});

	}

	const splitCoins = async (pPSUI, yPSUI) => {
		let txb = new TransactionBlock();
		txb.moveCall({
			target: `${process.env.SPLIT_ID}::split::withdraw_out`,
			typeArguments: [
				process.env.PPSUI_TYPE,
				process.env.YPSUI_TYPE 
			],
			arguments: [
				txb.object(process.env.POOL),
				txb.makeMoveVec({ objects: [txb.object(process.env.PSUI_ID)] }),
				txb.pure(pPSUI),
				txb.pure(yPSUI),
				txb.object(process.env.POCKED)
			]
		});

		txb.setGasBudget(300000000);
		return await signAndExecuteTransactionBlock({
			transactionBlock: txb,
			requestType: 'WaitForEffectsCert',
			options: { showEffects: true },
		});

	}

	return { staking, mintTokens, generatePool, createPocket, mergeCoins, splitCoins };
}
