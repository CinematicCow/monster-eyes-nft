import React from 'react';
import Modal from './utils/modal';

import { nft } from '../content';

const NftCard = () => {
    return (
        <div className="card max-w-lg card-bordered card-compact flex items-center lg:card-normal shadow-2xl mb-5">
            <figure className="px-10 pt-10" style={{ width: '300px', height: '250px' }}>
                <img src={nft.image} alt="" className="rounded-xl w-full h-full" />
            </figure>
            <div className="card-body">
                <Modal data={nft.attributes} />
                <h2 className="pt-5 card-title text-secondary font-extrabold">{nft.name}</h2>
                <p>{nft.description}</p>
            </div>
        </div>
    );
};

export default NftCard;
