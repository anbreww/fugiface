import React from 'react';
import './TapList.css'

import Tap from './Tap';

const TapList = () => {
  return (
    <div className="tap-page">
      <h2>Fûgidaire Taplist v3</h2>
      <div className="tap-container">
        <Tap tapName="1" beerName="Armadillo" beerType="Pale Ale" abv={5.5} ibu={50} 
          description="This wonderful Pale Ale is nothing fancy really..."
        />
        <Tap tapName="2" beerName="No Hope" beerType="Black IPA" abv={5.5} ibu={50}/>
        <Tap tapName="3" beerName="Triple Trouble" beerType="Belgian Triple" abv={5.5} ibu={50}/>
        <Tap tapName="4" beerName="Legen-dairy" beerType="Milk Stout" abv={5.5} ibu={50} />
        <Tap tapName="5" beerName="Le Freak" beerType="Funky Brown Ale"  abv={5.5} ibu={50}/>
      </div>
    </div>
  )
}

export default TapList;