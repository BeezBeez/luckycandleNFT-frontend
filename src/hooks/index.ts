import { utils } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { ChainId, useContractFunction } from "@usedapp/core";
import { ApplicationContracts } from '../config/contracts';
import minterABI from '../abis/minter.json';

const minterInterface = new utils.Interface(minterABI);

export function useBuyCandle(chainId: ChainId) {
    const contract = new Contract(chainId === ChainId.Ropsten ? ApplicationContracts.minter[3] : ApplicationContracts.minter[1], minterInterface);
    const { state, send } = useContractFunction(contract, "buyCandle", {transactionName: "Buy Candle"});
    return { state, send };
}