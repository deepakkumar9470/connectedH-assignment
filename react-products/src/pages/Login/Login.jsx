import React,{useState,useEffect} from 'react'
import { FiUser } from 'react-icons/fi'
import './Login.css'
import axios from 'axios'
import {Route,Link} from 'react-router-dom'
import Cookies from 'universal-cookie'
const cookies = new Cookies()


const Login = () => {
      const [email, setEmail] = useState('') 
      const [password, setPassword] = useState('') 
      const [isLogin, setIsLogin] = useState(false);

      const loginHandler =async (e) =>{
          e.preventDefault()
          try {
              const user = await axios.post('http://localhost:5000/api/auth/login', {
                  email,password
              })
                
              // Getting the cookies
              cookies.set('TOKEN', user.data.token, {
                  path: "/"
              });

               setIsLogin(true)

              
              if(user.status === 400 || !user){
                  alert('Invalid credentials..')
              }else{
                <div class="alert alert-success" role="alert">
                   Logged in Successfully..
                </div>
                window.location.href = '/'
              }
          } catch (error) {
            error = new Error();
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



                 {isLogin ? (
                   <p className="text-success text-center p-2">You rre logged in Successfully</p>
                  ) : (
                   <p className="text-danger text-center p-2">You are not logged in</p>
                   )}
            </form>   


            
        </div>
    )
}

export default Login
