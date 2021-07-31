import React from 'react';

export default function Img({section, side}) {
    if(!section?.img) return null;
    return (<img className={`card-wrapper--${side}--img ${section.invertImgColors ? "invert" : ""}`} src={section.img} alt={section.title} />);
}