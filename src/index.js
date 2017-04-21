import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import './css/index.css';

const Root = () => {
  return (
    <Router>
      <div>
        <Route path="/" component={App} />
      </div>
    </Router>
  )
}

render(<Root/>, document.getElementById('root'));

export default Root;
