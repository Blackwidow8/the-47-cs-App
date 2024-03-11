import './index.css';
import {Link} from 'react-router-dom'

const Footer =()=>{
return(
    <footer>
        <div>
        <Link to ='/home'>Home</Link>
        </div>
        <div>
    <Link to ='/discover'>Discover</Link>
        </div>
        <div>
            <Link to = '/county'>County</Link>
        </div>

        <div>
            <Link to = '/account'>Account</Link>
        </div>
        
    </footer>
)
}
export default  Footer;