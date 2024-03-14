import "./index.css";
import Image from '../../assets/giraffecenter.png'
import { Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../context/authContext";

const Hero = () => {

    const { session } = useContext(AuthContext)

    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-text">
                    <h1>WELCOME TO OUR HOME PAGE</h1>
                    <p>The 47 Cs, home of Tourists</p>
                    <p>Explore and visit the 47 counties with us</p>
                    {
                        session ? <Link>Explore</Link> :
                            <>
                                <div >

                                    <Link to="/login">
                                        <button className='sign-btn'>Login</button>
                                    </Link>
                                </div>


                                <div>or<hr></hr></div>

                                <Link to="/register">
                                    <button className='sign-btn'>Register</button>
                                </Link>
                            </>
                    }

                </div>

                <div className="Hero-image">
                    <img src={Image} />
                </div>
            </div>

        </section>
    )
}
export default Hero;