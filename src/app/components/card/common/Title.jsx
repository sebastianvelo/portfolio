import React from 'react';
import Letters from './Letters';

export default function Title({ section, side }) {
    return (
        <div className={`card-wrapper--${side}--title ${section.layout?.darkTxt ? "invert" : ""}`}>
            <Letters txt={section?.title} sector='title' side={side} />
        </div>
    );
}