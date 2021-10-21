import { Contract } from './types';

interface Contracts {
    minter: Contract;
    whitelist: Contract;
    staking: Contract;
}

export const ApplicationContracts: Contracts = {
    minter: {
        "1": "0x0",
        "3": "0xF383277d359579b71D9fD661Fbf5496Ad4971487"
    },
    whitelist: {
        "1": "0x0",
        "3": "0x5333d530e5205e25fd6E9Ac59F5d26feAcd24289",
    },
    staking: {
        "1": "0x0",
        "3": "0x0"
    }
}