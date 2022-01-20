import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const ConnectWallet = (props: any) => {
    const { address } = props;
    return (
        <span>
            <WalletMultiButton className="connect-button">{address}</WalletMultiButton>
        </span>
    );
};

export default ConnectWallet;
