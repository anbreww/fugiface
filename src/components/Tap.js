import React, { Component } from 'react'

const formatABV = (abv) => {
  return `${abv.toFixed(1)}%`;
}

const formatIBU = (ibu) => {
  return `${ibu.toFixed(0)}`;
}

class Tap extends Component {
  render () {
    const abv = formatABV(this.props.abv);
    const ibu = formatIBU(this.props.ibu);
    const description = this.props.description || `
    Here goes the beer description, what it tastes like, 
    should be a decently sized paragraph really. Below we'll 
    have specs like IBU and ABV.`
    return (
      <div className="tap">
        <div className="tapName">
          <h2>{this.props.tapName}</h2>
        </div>
        <div className="tapContent">
          <span className="beer-name">{this.props.beerName}</span>
          <span className="beer-type">{this.props.beerType}</span>
          <p className="beer-description">{description}</p>
          <span className="beer-stats">{abv} ABV / {ibu} IBU</span>
        </div>
      </div>
    )
  }
}

export default Tap;