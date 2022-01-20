/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as anchor from '@project-serum/anchor';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

// Setup Candymachine data
const getCandyMachineID = (): anchor.web3.PublicKey | undefined => {
    try {
        const candyMachineID = new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID!);
        return candyMachineID;
    } catch (error) {
        console.error('Failed to construct candy machine ID', error);
        return undefined;
    }
};

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;
const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost ? rpcHost : anchor.web3.clusterApiUrl('devnet'));

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);
const txTimeoutInMilliseconds = 30000;

const candymachine = {
    id: getCandyMachineID(),
    network,
    rpcHost,
    connection,
    startDateSeed,
    txTimeoutInMilliseconds,
};

export { candymachine };
