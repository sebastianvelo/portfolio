import React, { Component } from 'react';
import Title from './common/Title';
import Img from './common/Img';
import Description from './common/Description';
import Button from './common/Button';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: ""
        }
    }

    toggleStatus() {
        if (!this.props.section?.isSwippable)
            return;
        let status = this.state.status === "" ? "active" : "";
        this.setState({ status: status });
    }

    render() {
        return (
            <div className={`card ${this.props.section?.layout?.size} ${this.state.status}`}>
                <div className={`card-wrapper ${this.props.section?.layout?.bg}`} >
                    <div className={`card-wrapper--front`} onClick={() => this.toggleStatus()}>
                        <Description section={this.props.section} side={'front'} />
                        <Img section={this.props.section} side={'front'} />
                        <Title section={this.props.section} side={'front'} />
                    </div>
                    <div className={`card-wrapper--back`} onClick={() => this.toggleStatus()}>
                        <Img section={this.props.section} side={'back'} />
                        <Description section={this.props.section} side={'back'} />
                        <Button section={this.props.section} side={'back'} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;





