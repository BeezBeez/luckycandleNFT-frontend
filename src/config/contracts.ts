import { Contract } from './types';

interface Contracts {
    minter: Contract;
}

export const ApplicationContracts: Contracts = {
    minter: {
        mainnet: "0x0",
        testnet: "0x88381Dd652341C978Cb50b80BFe5dE434A0fE1b1"
    }
}