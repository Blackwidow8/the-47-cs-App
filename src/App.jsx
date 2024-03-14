import { useContext } from 'react'
import Navbar from "./components/Navbar"
import NavBar2 from './components/NavBar2'
import Hero from "./components/Hero"

import Footer from "./components/Footer"
import { supabase } from "./utils/supabaseConfig"
import { Link } from 'react-router-dom'
import { AuthContext } from "./components/context/authContext"

const App = () => {
  const { session } = useContext(AuthContext)

  async function signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) {
      alert(error)
    }
  }


  return (

    <>

      <Navbar />
      <NavBar2/>
      <Hero/>
      <Footer/>
      
    </>
    
  )
  



}
export default App

