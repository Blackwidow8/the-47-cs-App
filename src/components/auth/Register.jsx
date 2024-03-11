import { useState } from "react"
import {supabase} from '../../utils/supabaseConfig'
import './Register.css'

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
          <div className="main-grid">
          <form onSubmit={signUpNewUser}>
            <h2>Register</h2>
            <label>FirstName:</label>
            <input type="firstname" name="first-name" value={FirstName} onChange={(e)=>setFirstName(e.target.value)} />
            <label>LastName:</label>
            <input type="Lastname" name="last-name" value={LastName} onChange={(e)=>setLastName(e.target.value)} />
            <label>Email:</label>
            <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <label>Number:</label>
            <input type="number" name="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <label>ConfirmPassword:</label>
            <input type="confirmpassword" name="confirmpassword" value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)} />

            <button type="submit">Submit</button>
            </form>
          </div>
        
        </div>
       
        
      </div>
        
    )
}

export default Signup