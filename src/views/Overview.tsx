import React from 'react';
import { overview as data } from '../content';

const Overview = () => {
    return (
        <div>
            <section className="bg-base-200 " id="more">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap">
                        <div className="w-1/2 mb-0 ">
                            <p className="leading-relaxed text-2xl"> {data.desc}</p>
                        </div>
                        <div className="w-1/2 mb-0 text-right">
                            <h1 className="sm:text-5xl text-4xl font-medium title-font mb-2 ">{data.title}</h1>
                            <h1 className="h-1 w-20 bg-primary rounded ml-auto"></h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="body-flex bg-base-200" id="more">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-5xl text-4xl font-medium title-font mb-2 "> What is an NFT ?</h1>
                            <div className="h-1 w-20 bg-secondary rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-2xl">
                            {' '}
                            An NFT, which stands for non-fungible token, is a unique unit of data employing technology
                            that allows digital content—from videos to songs to images—to become logged and
                            authenticated on cryptocurrency blockchains, primarily Ethereum.The main impact of NFTs is
                            making it easy to own and sell digital content.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Overview;
