import React, { Component } from 'react';
import './App.css';

import TapList from './components/TapList';
import sampleBeers from './sample_beers'

class App extends Component {
  constructor() {
    super();

    this.state = {
      beers: sampleBeers,
      taps: {}
    }
  }

  render() {
    return (
      <div className="App">
        <TapList beers={this.state.beers} />
      </div>
    );
  }
}

export default App;
