import { Link } from 'react-router-dom';
import data from '../../kenya-counties-subcounties/counties.json'

import React, { useState } from "react";

const Card=() =>{

  return (
    <div className="App">
      <h1>Counties in Kenya</h1>
      <ul>
        {data.map((county) => (
          <li key={county.code}>
            <h2>{county.name}</h2>
            <p>Capital: {county.capital}</p>
            <p>Code: {county.code}</p>
            <h3>Sub-counties:</h3>
            <ul>
              {county.sub_counties.map((subCounty, index) => (
                <li key={index}>{subCounty}</li>
              ))}
            </ul>
            <Link to={`/county/${county.code}`} state={county.name}>Show County</Link>

          </li>
        ))}
      </ul>
    </div>
    
  );
}

export default Card;