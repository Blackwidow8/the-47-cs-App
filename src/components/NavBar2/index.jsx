import  './index.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const NavBar2 = ()=>{

    const [ sideNav, setSideNav ] = useState(false)

    const handleSideNav = ()=>{
        setSideNav((prevState) => !prevState)
    }
    return(
<nav>

    <div className='nav-lines' style={{cursor:'pointer'}} onClick={handleSideNav}>
                
                <div></div>
                <div> </div>
                <div> </div>
            </div>

            <div className={`side-nav ${sideNav ? 'open':'closed'}`}>   
                <div onClick={handleSideNav} style={{cursor:'pointer'}}>x</div>
                <Link to ='/home'>Home</Link>
              <Link to ='/about'>About</Link>
              <Link to ='/account'>Account</Link>
              <Link to = '/discover'>Discover</Link>
              <Link to = '/counties'>County</Link>
            </div>
  
</nav>
    )
    
}
export default NavBar2;