import {Link, useLocation} from  'react-router-dom'
import React, { useEffect, useState } from "react";
import "./index.css"

import Cards from '../../components/Card';
 
const County = ()=>{
    const [bnbs, setbnbs ] = useState([])
    const name = useLocation().state
    const url = `https://airbnb13.p.rapidapi.com/search-location?location=${name}&checkin=2024-10-10&checkout=2024-10-11&adults=1&children=0&infants=0&pets=0&page=1&currency=USD`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b9231902ccmsh81fd2d9d26e74a9p1ffa55jsn26510e5ac2fc',
        'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
      }
    };

    const fetchItems = async ()=>{
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data.results)
        setbnbs(data.results)
    }

    useEffect(()=>{
        fetchItems()
    }, [])
    return (
        <div className='container'>
            {
                bnbs.map((bnb, index)=>{
                    return (
                        <div className='card'  key={index}>
                            <div>
                                <img />
                            </div>
                            <p>{bnb.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default County;