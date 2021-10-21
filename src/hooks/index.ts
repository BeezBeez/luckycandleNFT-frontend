import { utils } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { ChainId, useContractFunction, useContractCall } from "@usedapp/core";
import { ApplicationContracts } from '../config/contracts';
import minterABI from '../abis/minter.json';
import whitelistABI from '../abis/whitelist.json';

const minterInterface = new utils.Interface(minterABI);
const whitelistInterface = new utils.Interface(whitelistABI);

export function useWhitelisted(chainId: ChainId, userAddress: string) {
    const contract = new Contract(chainId === ChainId.Ropsten ? ApplicationContracts.whitelist[3] : ApplicationContracts.whitelist[1], whitelistInterface);
    const isWhitelisted = useContractCall(userAddress && {abi: contract.interface, address: contract.address, args: [userAddress], method: 'Whitelisted'});
    return isWhitelisted;
}

export function useBuyCandle(chainId: ChainId) {
    const contract = new Contract(chainId === ChainId.Ropsten ? ApplicationContracts.minter[3] : ApplicationContracts.minter[1], minterInterface);
    const { state, send } = useContractFunction(contract, "buyCandle", {transactionName: "Buy Candle"});
    return { state, send };
}

export function useEarlyBuyCandle(chainId: ChainId) {
    const contract = new Contract(chainId === ChainId.Ropsten ? ApplicationContracts.minter[3] : ApplicationContracts.minter[1], minterInterface);
    const { state, send } = useContractFunction(contract, "earlyBuyCandle", {transactionName: "Early Buy Candle"});
    return { state, send };
}