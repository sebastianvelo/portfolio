import React from 'react';

export default function Description({ section, side }) {
    return (section[side]?.description ?
        <h1 className={`card-wrapper--${side}--description ${section.layout?.darkTxt ? "invert" : ""}`}>
            {section[side].description}
        </h1> :
        ""
    )
}