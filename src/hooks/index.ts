import { utils } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { useContractFunction } from "@usedapp/core";
import { ApplicationContracts } from '../config/contracts';
import minterABI from '../abis/minter.json';

const minterInterface = new utils.Interface(minterABI);

export function useBuyCandle(chainId: 1 | 3) {
    const { state, send } = useContractFunction(new Contract(ApplicationContracts.minter[chainId], minterInterface), "buyCandle", {transactionName: "Buy candle"});
    return { state, send };
}