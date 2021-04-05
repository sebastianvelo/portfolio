import React, { Component } from 'react';

import Card from '../card/Card';

class CardsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        return (
            <div className="cards grid">
                <div className="cards-container row">
                    {this.props.data.map((card, i) => <Card key={i} section={card} />)}
                </div>
            </div>
        );
    }
}

export default CardsContainer;