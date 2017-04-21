import React from 'react';
import ReactDOM from 'react-dom';
import TapList from './TapList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TapList beers={{}}/>, div);
});
