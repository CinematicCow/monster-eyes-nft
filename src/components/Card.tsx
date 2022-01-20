import React from 'react';

const Card = (props: any) => {
    return (
        <div className="w-1/2 py-2 px-2">
            <div className="card shadow-lg bg-base-100  ">
                <div className="card-body ">
                    <p>{props.title}</p>
                    <h2 className="card-title text-4xl font-bold text-primary">{props.value}</h2>
                </div>
            </div>
        </div>
    );
};

export default Card;
