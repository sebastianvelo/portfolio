import React from 'react';

export default function Letters({txt, sector, side}) {
    return (txt.split("").map((letter, i) =>
        <span className={`card-wrapper--${side}--${sector}--letter`} style={{ transitionDelay: `${i * 30}ms` }}>
            {letter}
        </span>
    ))
}