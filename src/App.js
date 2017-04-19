import React, { Component } from 'react';
import './App.css';

import TapList from './components/TapList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      beers: {},
      taps: {}
    }
  }

  render() {
    return (
      <div className="App">
        <TapList />
      </div>
    );
  }
}

export default App;
