import React, { Component } from 'react';
import PropTypes from 'prop-types';

const formatABV = (abv) => {
  return `${abv.toFixed(1)}%`;
}

const formatIBU = (ibu) => {
  return `${ibu.toFixed(0)}`;
}

class Tap extends Component {
  render () {
    const beer = this.props.beer;
    const abv = formatABV(beer.abv);
    const ibu = formatIBU(beer.ibu);
    const description = beer.desc || `
    Here goes the beer description, what it tastes like, 
    should be a decently sized paragraph really. Below we'll 
    have specs like IBU and ABV.`
    return (
      <div className="tap">
        <div className="tapName">
          <h2>{this.props.tapName}</h2>
        </div>
        <div className="tapContent">
          <span className="beer-name">{beer.name}</span>
          <span className="beer-type">{beer.style}</span>
          <p className="beer-description">{description}</p>
          <span className="beer-stats">{abv} ABV / {ibu} IBU</span>
        </div>
      </div>
    )
  }

  static PropTypes = {
    tapName: PropTypes.string.isRequired,
    beer: PropTypes.object.isRequired
  }
}

export default Tap;