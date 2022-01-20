import React from 'react';

const Carousel = () => {
    return (
        <div className="flex justify-center bg-base-200 pb-20">
            <div className="carousel carousel-center rounded-box" style={{ width: 'calc(100% - 100px)' }}>
                <div className="carousel-item">
                    <img src="https://picsum.photos/id/500/256/144" />
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/id/501/256/144" />
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/id/502/256/144" />
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/id/503/256/144" />
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/id/504/256/144" />
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/id/505/256/144" />
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/id/506/256/144" />
                </div>
            </div>
        </div>
    );
};

export default Carousel;
