import React,{useState} from 'react'
import './Signup.css'
import axios from 'axios'
const Signup = () => {

    const [data,setData] = useState({
        name:  '', 
        email: '', 
        password: '', 
        dob: '', 
        mobile: ''
    })
    
    
    const onChangeHandler = (e) =>{
        console.log(e)
        setData({
            ...data,[e.target.name] : e.target.value
        })
    }
    
    const submitFormHandler = async (e) =>{
      e.preventDefault()
      try {
          const userdata = await axios.post('http://localhost:5000/api/auth/register', {
              name :data.name,email:data.email,password:data.password,dob:data.dob,mobile:data.mobile
          })
          

          
          setData('')
          window.location.href = '/login'
      } catch (error) {
             console.log('Oops failed registration', error)
      }
        
    }
    

    return (
        <div className="signup_container">
             

            <form action="" method="post" className="form_container">
               
            <h3 className="signup_heading">Signup here</h3>

               <div className='input_div'>
                    <label htmlFor="name">Name</label>
                    <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder="Enter your name" />
                </div>
                <div className='input_div'>
                    <label htmlFor="email">Email</label>
                    <input onChange={onChangeHandler} value={data.email} type="text" name="email" placeholder="Enter your email" />
                </div>
                <div className='input_div'>
                    <label htmlFor="password">Password</label>
                    <input onChange={onChangeHandler} value={data.password} type="password" name="password" placeholder="Enter your password" />
                </div>
                <div className='input_div'>
                    <label htmlFor="password">D.O.B</label>
                    <input onChange={onChangeHandler} value={data.dob} type="date" name="date" placeholder="Enter your dob" />
                </div>
                <div className='input_div'>
                    <label htmlFor="mobile">Mobile No</label>
                    <input onChange={onChangeHandler} value={data.mobile} type="number" name="mobile" placeholder="Enter your mobile no" />
                </div>
                
                 <button type="submit" onClick={submitFormHandler}>Signup</button>
            </form>   


            
        </div>

      
          
    )
}

export default Signup
