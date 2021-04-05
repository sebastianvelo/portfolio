import React, { Component } from 'react';
import { Route } from "react-router-dom";

import CardsContainer from './components/cardscontainer/CardsContainer';

import sections from './data/sections';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div id="App">
        <Route exact path={["/", "/home"]} component={() => <CardsContainer data={sections} />} />
        {sections.filter(s => s.button).map(section => <Route exact path={section.button.path} component={() => <CardsContainer data={section.children} />} />)}
      </div>
    );
  }
}

export default App;