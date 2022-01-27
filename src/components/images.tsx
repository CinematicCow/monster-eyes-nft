import React from 'react';
import CardImage from './CardImage';

const sources = [
    ' https://tz3p5xdyly2ep7n3lqjseqi6vwytkyn3wfdkluaf7ds3zdc5tniq.arweave.net/nnb-3HheNEf9u1wTIkEerbE1YbuxRqXQBfjlvIxdm1E/?ext=png',
    ' https://www.arweave.net/DrXv3YCWEQa85JH3cAiY94g7FDKA3Yot4YLsT1Psy34?ext=png',
    ' https://www.arweave.net/8EhbKo2zaUOYNaDG0Hm6ifz0GItjxXoFCXfLQZXajsY?ext=png',
    ' https://j3mcpgldkhhvmug6k52mz2eqbcblgtohbxy6yuixw53mm65jpspa.arweave.net/TtgnmWNRz1ZQ3ld0zOiQCIKzTccN8exRF7d2xnupfJ4/?ext=png',
];

const Images = () => {
    return (
        <div className="flex justify-center">
            {sources.map((source) => {
                // eslint-disable-next-line react/jsx-key
                return <CardImage src={source} />;
            })}
        </div>
    );
};

export default Images;
