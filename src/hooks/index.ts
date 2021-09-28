import { useContractFunction } from "@usedapp/core";
import { Contracts, ethers } from "@usedapp/core";
import { ApplicationContracts } from '../config/contracts';
import minterABI from '../abis/minter.json';

const minterInterface = new ethers.utils.Interface(minterABI);

export function useBuyCandle(chainName: "mainnet" | "testnet") {
    const { state, send } = useContractFunction(new Contract(ApplicationContracts.minter[chainName], minterInterface), "buyCandle", {transactionName: "Buy candle"});
    return { state, send };
}