import data from '../../kenya-counties-subcounties/counties.json'

import React, { useState } from "react";

const result = [
counties.json
];

const Card=() =>{
  const [counties, setCounties] = useState(data);

  return (
    <div className="App">
      <h1>Counties in Kenya</h1>
      <ul>
        {counties.map((county) => (
          <li key={county.name}>
            <h2>{county.name}</h2>
            <p>Capital: {county.capital}</p>
            <p>Code: {county.code}</p>
            <h3>Sub-counties:</h3>
            <ul>
              {county.sub_counties.map((subCounty, index) => (
                <li key={index}>{subCounty}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;