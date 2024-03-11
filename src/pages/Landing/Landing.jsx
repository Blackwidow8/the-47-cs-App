import {Link} from  'react-router-dom'
import React from "react";
import Image from '../../assets/Diani_Beach_Sunrise_Kenya.jpg'
import './Landing.css'
import NavBar2 from '../../components/NavBar2';
import { FaArrowRightLong } from "react-icons/fa6";

const Landing = () =>{
    return(
<>
<NavBar2/>
<div className='landing-section'>
<div className='image-container'>
   
<img className="land-img" src={Image}/>
<h1>TRAVEL THE 47 COUNTY WITH US!</h1>
</div>
<Link to='/discover'>
        <button className="discover-button">
          <p>Discover</p>
          <FaArrowRightLong />
        </button>
      </Link>

</div>

                        

 </>
                    

    )
}

export default Landing;