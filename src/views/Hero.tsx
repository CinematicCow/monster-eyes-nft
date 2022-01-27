import React from 'react';
import Images from '../components/images';
import { HeroInterface } from '../interfaces';
const Hero = (props: HeroInterface) => {
    const { data } = props;
    return (
        <div>
            <div className="hero bg-base-200" style={{ height: '60vh' }}>
                <div className="text-center hero-content">
                    <div className="max-w-5xl">
                        <h1 className="mb-5 text-5xl font-bold">
                            {data.title} <span className="text-primary">{data.sub}</span>
                        </h1>
                        <p className="mb-5 text-xl tracking-wide leading-relaxed">{data.desc}</p>
                        <a href="#more" className="btn btn-primary">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
            <section className="px-10 py-10 bg-base-200">
                <Images />
            </section>
        </div>
    );
};
export default Hero;
