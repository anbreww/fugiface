import React, { Component } from 'react';
import './css/App.css';

import TapList from './components/TapList';
import sampleBeers from './sample_beers';

import base from './base';

class App extends Component {
  constructor() {
    super();

    this.loadDefaults = this.loadDefaults.bind(this);

    this.state = {
      beers: {},
      taps: {},
      kegeratorId: 'v2',
    };
  }

  componentWillMount() {
    // called just before rendering occurs
    // we'll want to replace this.state by the App params probably'
    this.ref = base.syncState(`${this.state.kegeratorId}/beers`,
      {
        context: this,
        state: 'beers',
      });
  }

  loadDefaults() {
    this.setState({
      beers: sampleBeers,
    });
  }

  render() {
    return (
      <div className="App">
        <TapList beers={this.state.beers} />
        <button className="load-defaults" onClick={this.loadDefaults}>Load Defaults</button>
      </div>
    );
  }
}

export default App;
