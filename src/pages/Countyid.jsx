import NavBar from "../components/NavBar2"
import Navbar from "../components/Navbar"
import { useLocation } from 'react-router-dom'
import Card from "../components/Card/index"

const Countyid = ()=>{
    //Get the character from the location state
    const county = useLocation().state

   
    return (
        <>
            <NavBar/>
            <Navbar/>
            {/**Have the display component */}
            <div>
                <Card/>
            </div>
            <p>{county.name}</p>
            <p>{county.capital}</p>
            <p>{county.code}</p>

        </>
    )
}

export default Countyid