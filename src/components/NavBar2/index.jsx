import  './index.css'
import { Link } from 'react-router-dom'

const NavBar2 = ()=>{
    return(
<nav>

    <div className='nav-lines'>
                
                <div></div>
                <div> </div>
                <div> </div>
            </div>

            <div className='side-nav'>
                <div>x</div>
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