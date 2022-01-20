import React from 'react';
import { HeroInterface } from '../interfaces';
const Hero = (props: HeroInterface) => {
    const { data } = props;
    return (
        <div>
            <div className="hero bg-base-200" style={{ height: '60vh' }}>
                <div className="text-center hero-content">
                    <div className="max-w-4xl">
                        <h1 className="mb-5 text-5xl font-bold">{data.title}</h1>
                        <p className="mb-5">{data.desc}</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Hero;
