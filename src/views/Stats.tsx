import React from 'react';
import { MintButton } from '../components/buttons';
import Card from '../components/Card';
import NftCard from '../components/NftCard';

interface StatsProps {
    nftData: {
        itemsRemaining: number;
        itemsAvailable: number;
        itemsRedeemed: number;
        itemPrice: any;
    };
    mintData: {
        candyMachine: any;
        isUserMinting: any;
        onMint: any;
    };
}

const Stats = (props: StatsProps) => {
    return (
        <div className="flex bg-base-200 px-10 py-10">
            {/* Left */}
            <div className="container  flex flex-wrap w-1/2 justify-center items-center ">
                <div className="container flex flex-wrap ">
                    {
                        // eslint-disable-next-line no-constant-condition
                        props.nftData.itemsAvailable == 0 ? (
                            <Card value={'Login with your wallet to see token details and mint'} />
                        ) : (
                            <>
                                <Card title={'Token Name'} value={'MEYE'} />
                                <Card title={'Token Price'} value={`◎ ${props.nftData.itemPrice}`} />
                                <Card title={'Total Eyes'} value={props.nftData.itemsAvailable} />
                                <Card title={'Total Minted'} value={props.nftData.itemsRedeemed} />
                                <Card title={'Remaining'} value={props.nftData.itemsRemaining} />
                            </>
                        )
                    }
                </div>
            </div>
            {/* Right */}
            <div className="conatiner flex flex-wrap w-1/2 justify-center items-center ">
                <div className="container flex flex-col items-center">
                    <NftCard />
                    {props.nftData.itemsAvailable == 0 ? (
                        ''
                    ) : (
                        <MintButton
                            candyMachine={props.mintData.candyMachine}
                            isMinting={props.mintData.isUserMinting}
                            onMint={props.mintData.onMint}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Stats;
