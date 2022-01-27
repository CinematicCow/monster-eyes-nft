import React from 'react';

const CardImage = (prop: { src: string }) => {
    return (
        <div className="px-10 py-10 ">
            <div className="card  card-bordered shadow-2xl max-w-sm">
                <figure>
                    <img src={prop.src} />
                </figure>
            </div>
        </div>
    );
};

export default CardImage;
