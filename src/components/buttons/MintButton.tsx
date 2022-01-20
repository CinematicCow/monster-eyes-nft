import React, { useEffect, useState } from 'react';
import { CandyMachineAccount } from '../../functions/candyMachine';
import { GatewayStatus, useGateway } from '@civic/solana-gateway-react';

const MintButton = ({
    onMint,
    candyMachine,
    isMinting,
}: {
    onMint: () => Promise<void>;
    candyMachine?: CandyMachineAccount;
    isMinting: boolean;
}) => {
    const { requestGatewayToken, gatewayStatus } = useGateway();
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if (gatewayStatus === GatewayStatus.ACTIVE && clicked) {
            onMint();
            setClicked(false);
        }
    }, [gatewayStatus, clicked, setClicked, onMint]);

    const getMintButtonContent = () => {
        if (candyMachine?.state.isSoldOut) {
            return 'SOLD OUT';
        } else if (candyMachine?.state.isPresale) {
            return 'PRESALE MINT';
        } else if (isMinting) {
            return 'MINTING';
        }

        return 'MINT';
    };
    const handleClick = async () => {
        setClicked(true);
        if (candyMachine?.state.isActive && candyMachine?.state.gatekeeper) {
            if (gatewayStatus === GatewayStatus.ACTIVE) {
                setClicked(true);
            } else {
                await requestGatewayToken();
            }
        } else {
            await onMint();
            setClicked(false);
        }
    };

    return (
        <button className={`btn btn-primary btn-lg btn-wide ${isMinting ? 'loading' : ''}`} onClick={handleClick}>
            {getMintButtonContent()}
        </button>
    );
};

export default MintButton;
