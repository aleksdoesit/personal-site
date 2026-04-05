import { useEffect, useState } from 'react';

const PHRASES = ['Full-Stack Developer', 'Team-Player', 'Problem Solver'] as const;
const INTERVAL_MS = 4000;

export function RotatingText() {
    const [index, setIndex] = useState(0);
    const [animate, setAnimate] = useState(true);

    useEffect(() => {
        const id = window.setInterval(() => {
            setAnimate(false);
            window.setTimeout(() => {
                setIndex((i) => (i + 1) % PHRASES.length);
                setAnimate(true);
            }, 50);
        }, INTERVAL_MS);
        return () => window.clearInterval(id);
    }, []);

    return (
        <span className="text-rotating">
            <span
                key={index}
                className={
                    animate
                        ? 'morphext animate__animated animate__bounceIn'
                        : 'morphext'
                }
            >
                {PHRASES[index]}
            </span>
        </span>
    );
}
