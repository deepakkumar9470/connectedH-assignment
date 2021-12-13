import React,{useState,useEffect} from 'react'
import { FiUser } from 'react-icons/fi'
import './Login.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Login = () => {
      const [email, setEmail] = useState('') 
      const [password, setPassword] = useState('') 

      const loginHandler =async (e) =>{
          e.preventDefault()
          try {
              const user = await axios.post('http://localhost:5000/api/auth/login', {
                  email,password
              })
               
              
              if(user.status === 400 || !user){
                  alert('Invalid credentials..')
              }else{
                alert('Logged in successfully..')
                window.location.href = '/'
              }
          } catch (error) {
              console.log(error)
          }
      }


    return (

        <div className="login_container">
             
           <h2>Login here</h2>
            <form action="" method="post" className="login_form_container">
            
               <div className='login_input_div'>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" name="email" placeholder="Enter your email" />
                </div>
                <div className='input_div'>
                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" placeholder="Enter your password" />
                </div>
                
                 <button type="submit" onClick={loginHandler}>Login</button>
            </form>   


            
        </div>
    )
}

export default Login
