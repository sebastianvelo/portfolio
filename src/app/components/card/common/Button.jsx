import React from 'react';
import { Link } from "react-router-dom";
import Letters from './Letters';

export default function Button({section, side}) {
    if (!section?.button) return null;
    if (section.button.path?.startsWith("http")) {
        return (
            <a href={section.button.path} className={`card-wrapper--${side}--button`} rel="noreferrer" target="_blank"> 
                <Letters txt={section.button.label} sector='button' side={side} />
            </a>
        );
    }
    return (<Link to={{ pathname: section.button.path }} className={`card-wrapper--${side}--button`}>
                <Letters txt={section.button.label} sector='button' side={side} />
            </Link>);
}
