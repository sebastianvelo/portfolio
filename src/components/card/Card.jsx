import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: ""
        }
    }

    toggleStatus() {
        let status = this.state.status === "" && this.props.section?.isSwippable ? "active" : "";
        this.setState({ status: status });
    }

    render() {
        return (
            <div className={`card ${this.props.section?.layout?.size} ${this.state.status}`}>
                <div className={`card-wrapper ${this.props.section?.layout?.bg}`} >
                    <div className={`card-wrapper--front`} onClick={() => this.toggleStatus()}>
                        {Description(this.props.section, "front")}
                        {Img(this.props.section, "front")}
                        {Title(this.props.section, "front")}
                    </div>
                    <div className={`card-wrapper--back`} onClick={() => this.toggleStatus()}>
                        {Img(this.props.section, "back")}
                        {Description(this.props.section, "back")}
                        {Button(this.props.section, "back")}
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;

function Title(section, side) {
    return (
        <div className={`card-wrapper--${side}--title ${section.layout?.darkTxt ? "invert" : ""}`}>
             {Letters(section?.title, "title", side)}
        </div>
    );
}

function Img(section, side) {
    return (
        section?.img ?
            <img className={`card-wrapper--${side}--img ${section.invertImgColors ? "invert" : ""}`} src={section.img} alt="" />
            :
            ""
    );
}

function Description(section, side) {
    return (section[side]?.description ?
            <h1 className={`card-wrapper--${side}--description ${section.layout?.darkTxt ? "invert" : ""}`}>
                {section[side].description}
            </h1> :
            ""
    )
}

function Button(section, side) {
    if (!section?.button)
        return "";
    if (section.button.path?.startsWith("http"))
        return (<a href={section.button.path} className={`card-wrapper--${side}--button`} target="_blank"> {Letters(section.button.label, "button", side)}</a>);
    return (<Link to={{ pathname: section.button.path }} className={`card-wrapper--${side}--button`}> {Letters(section.button.label, "button", side)}</Link>);
}

function Letters(txt, sector, side) {
    return (
        txt.split("")
            .map(
                (letter, i) => <span className={`card-wrapper--${side}--${sector}--letter`} style={{ transitionDelay: `${i * 30}ms` }}>{letter}</span>
            )
    )
}