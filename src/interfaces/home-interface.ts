import * as anchor from '@project-serum/anchor';

export interface HomeProps {
    data: {
        id?: anchor.web3.PublicKey | undefined;
        connection: anchor.web3.Connection;
        startDateSeed: number;
        txTimeoutInMilliseconds: number;
        rpcHost: string;
        network?: any;
    };
}
