import React from 'react';
import { ConnectWallet } from '../components/buttons';
import { NavbarInterface } from '../interfaces';

const NavbarComponent = (props: NavbarInterface) => {
    const { data } = props;
    return (
        <div className="navbar bg-neutral text-neutral-content ">
            <div className="flex-1 px-2 mx-2">
                <span className="text-lg font-bold">{data.title}</span>
            </div>
            <div className="flex-none">
                <ConnectWallet address={props.address} />
            </div>
        </div>
    );
};

export default NavbarComponent;
