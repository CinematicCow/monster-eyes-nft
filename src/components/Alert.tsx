import React from 'react';

interface AlertProps {
    msg: string;
    serv: string;
    onClick: () => void;
}

const Alert = (props: AlertProps) => {
    return (
        <div onClick={props.onClick} className={`alert ${props.serv}`}>
            <div className="flex-1 justify-center">
                <label>{props.msg}</label>
            </div>
        </div>
    );
};

export default Alert;
