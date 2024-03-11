import  './index.css'
import { Link } from 'react-router-dom'
import {FcBinoculars} from "react-icons/fc"
import { GiKenya } from "react-icons/gi";


const Navbar = () =>{

return(
    <nav>

<div className="nav-link">
<Link to= '/home'>Home</Link>
</div>

<div className='heading'>

    <h1><FcBinoculars />The 47 Tourist Destination
    <GiKenya />
</h1>
    </div>

    
    </nav>
)

}
export default Navbar;