import React from 'react';
import CityToCoords from '../../components/CityToCoords';

function Differentiator(): JSX.Element {

  console.log(process.env);

  return (

    <div>
      <div className="about-screen border border-primary">
        <h1>Daylight Difference Determiner</h1>
        <p>This app determines the difference in amount of daylight time between two giving locations.</p>
      </div>
      <div>
        <h3>Enter city name for location 1</h3>
        <CityToCoords />
      </div>
      <div>
        <h3>Enter city name for location 2</h3>
        <CityToCoords />
      </div>

    </div>

  )

};
export default Differentiator;