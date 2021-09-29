import { utils, Signer } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { ChainId, useContractFunction } from "@usedapp/core";
import { ApplicationContracts } from '../config/contracts';
import minterABI from '../abis/minter.json';

const minterInterface = new utils.Interface(minterABI);

export function useBuyCandle(chainId: ChainId, signer: Signer) {
    console.log(chainId);
    const { state, send } = useContractFunction(new Contract(chainId === ChainId.Ropsten ? ApplicationContracts.minter[3] : ApplicationContracts.minter[1], minterInterface), "buyCandle");
    return { state, send };
}