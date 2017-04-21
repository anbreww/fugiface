import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Admin from './components/Admin';
import './css/index.css';

const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/admin" component={Admin} />
    </div>
  </Router>
);

render(<Root />, document.getElementById('root'));

export default Root;
