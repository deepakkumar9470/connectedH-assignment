import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

import axios from 'axios'
import Cookies from "universal-cookie";
const cookies = new Cookies();


const Navbar = () => {

  // const logoutHandler = async () =>{
  //     await axios.post('http://localhost:5000/api/auth/logout')
  //     alert('Logout sucessfully')
  // }

  const logout = () => {
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
    // redirect user to the landing page
    window.location.href = "/";
  }
    return (
        <div className="navbar">
            <div className="navbar_links">
                <div className="navbar_logo">
                  <Link to="/" className="nav-link">
                     <h2>CONNECTED-H</h2>
                  </Link>
                </div>

            </div>

             <div className="navbar_buttons">
                   <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="user" />
                   <p className='signup'><Link to="/signup">Signup</Link></p>       
                   <p className='login'><Link to="/login">Login</Link></p>
                   <p className='logout'><Link to="/logout"
                   onClick={() => logout()}>Logout</Link></p>
             </div>

            
       </div>
    )
}

export default Navbar