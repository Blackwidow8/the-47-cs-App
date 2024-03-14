import { useState } from "react"
import {supabase} from '../../utils/supabaseConfig'
import './Register.css'
import Image from '../../assets/reg.jpg'

const Signup = ()=> {
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
    const [ email, setEmail ] = useState('')
    const [number,setNumber] = useState('')
    const [ password, setPassword ] = useState('')
    const[confirmpassword , setConfirmPassword] = useState('')

    async function signUpNewUser(e) {
        e.preventDefault();
        
        const { data, error } = await supabase.auth.signUp({
          FirstName: FirstName,
          LastName: LastName,
          email: email,
          number:number,
          password: password,
          options: {
            emailRedirectTo: 'http://localhost:5173/',
          },
        })

        if ( error ) {
            console.log(error)
        } else {
            console.log(data)
        }
      }
      
    return (
      <div className="signUp-section">
        <div className="container">
          <div className="left-container">
          <form onSubmit={signUpNewUser}>
            <h2>Register</h2>
            <label>FirstName:</label>
            <input  className="input-box" type="firstname" name="first-name" value={FirstName} onChange={(e)=>setFirstName(e.target.value)} />
            <label>LastName:</label>
            <input className="input-box"  type="Lastname" name="last-name" value={LastName} onChange={(e)=>setLastName(e.target.value)} />
            <label>Email:</label>
            <input className="input-box" type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <label>Number:</label>
            <input className="input-box" type="number" name="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
            <label>Password</label>
            <input className="input-box" type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <label>ConfirmPassword:</label>
            <input className="input-box" type="confirmpassword" name="confirmpassword" value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)} />

            <button type="submit">Submit</button>
            </form>
          
          </div>
          <div className="right-container">
<div className="login-img">
        <img src={Image}/>
    </div>
        
        </div>
       
        </div>
      </div>
        
    )
}

export default Signup;