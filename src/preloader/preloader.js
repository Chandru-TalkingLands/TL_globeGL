import React, { useEffect, useState } from 'react';
import '../preloader/preloader.css'


const Preloader = () => {
    const [animationStage, setAnimationStage] = useState(0);
const letters = 'Talking Lands'.split('');

const animateLetters = (stage) => {
    if (stage < 4) {
        setTimeout(() => {
            setAnimationStage(stage + 1);
            animateLetters(stage + 1);
        }, stage === 1 ? 150 : 100);
    }
}

useEffect(() => {
    animateLetters(animationStage);
}, [animationStage]);

return (
    <div className="animation-wrapper">
        <div className={`letters ${animationStage === 2 ? 'collapse' : ''} ${animationStage === 3 ? 'zoom-out' : ''}`}>
            {letters.map((letter, index) => (
                <span
                    key={index}
                    className={`letter ${animationStage > 0 ? 'visible' : ''}`}
                    style={{
                        marginLeft: animationStage === 0 ? '1.5cm' : 0,
                        transform: animationStage === 1 ? 'scale(0)' : 'scale(1)',
                    }}
                >
                    {letter}
                </span>
            ))}
        </div>
    </div>
);
};

export default Preloader;
