import { Contract } from './types';

interface Contracts {
    minter: Contract;
    whitelist: Contract;
    staking: Contract;
}

export const ApplicationContracts: Contracts = {
    minter: {
        "1": "0xC2DDEc8e994fc5aEE001256EE4B34be44fC484DF",
        "3": "0xF383277d359579b71D9fD661Fbf5496Ad4971487",
        "4": "0x763F1e536D48746E622121c73CaC090ea66aa023"
    },
    whitelist: {
        "1": "0x90facD7312F770D1B31bf452F7D1C0452aDB2418",
        "3": "0x5333d530e5205e25fd6E9Ac59F5d26feAcd24289",
        "4": "0x2893c5757F6aFaa4bE22d1987B6F1C9495e00BC2"
    },
    staking: {
        "1": "0x0",
        "3": "0x0",
        "4": "0x0"
    }
}