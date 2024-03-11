import { useState } from "react";
import { supabase } from '../../utils/supabaseConfig'
import image from '../../assets/login.jpg'
import { Link } from "react-router-dom";


import './Login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signInWithEmail(e) {
    e.preventDefault();
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if ( error ) {
        console.log(error)
    } else {
        console.log(data)
        window.location.href = '/'
    }
  }
  
  return (
    <div className="login-section" >
    <div  className="container">
        <div className="left-container">

    <form onSubmit={signInWithEmail}>
      <h2>Login</h2>
      <label>E-mail : </label>
<div> 
<input  className="input-box"
        type="text"
        name="email"
        value={email}
        placeholder="Enter your Email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
</div>

<label>Password:</label>

      <div >
        
      <input className="input-box"
        type="text"
        name="password"
        value={password}
        placeholder="your password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
     
      
      </div>
      

      <div className="remember-forgot">
<label><input type="checkbox"/>Remember me</label>

<Link to ='/'>Forgot password?</Link>
      </div>
      
                       
                            <>
                                <div>
                                <Link to ="/landing">
<button className="submit-btn" type="submit">Submit</button>
</Link>
                                </div>
                            </>
                    

      
    </form>
    </div>
<div className="right-container">
<div className="login-img">
        <img src={image}/>
    </div>
</div>
    
    </div>
    </div>
  );
};

export default Login;