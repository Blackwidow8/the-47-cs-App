import './index.css'
import { Link } from 'react-router-dom';
import data from '../../kenya-counties-subcounties/counties.json'

import React, { useState } from "react";

const Card=() =>{

  return (
    
    <div className="card-display">
  <h1>Counties in Kenya</h1>
  <ul>
    {data.map((county) => (
      <div className='cards'>
        <li className="id" key={county.code}>
        <h2>{county.name}</h2>
        <p>Capital: {county.capital}</p>
        <p>Code: {county.code}</p>

        <Link to={`/county/${county.code}`} className='button' state={county.name}>Show County</Link>
      </li>
      </div>
      
    ))}
  </ul>
</div>



    
  );
}

export default Card;