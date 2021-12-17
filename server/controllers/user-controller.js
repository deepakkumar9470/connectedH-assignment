
import User from '../models/Users.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

  class UserController {

      static register = async (req,res) => {
           
             

            try {

              const {name, email,password,dob,mobile} = req.body

            //  if(!name || !email || !password || !dob || !mobile){
            //   res.status(400).json('Please fill all fields')
              
            //  }
              const userCheck = await User.findOne({name})
              if(userCheck){
                res.status(400).json({success: false, msg: 'User already exist'})
              }

              const salt = await bcrypt.genSalt(10)
              const hashPassword = await bcrypt.hashSync(password, salt) 
              const user = await new User({
                name : name,
                email : email,
                password : hashPassword,
                dob :  dob,
                mobile :  mobile,
              });

              await user.save()
              return res.status(200).json({success: true, msg: 'Registration successfull'})
              
            } catch (error) {
              res.status(400).json({success: false, msg: 'Oops registration failed'})
            }
          

          
            
        };
    

      // static login = async (req,res) => {
      //   const {email,password} = req.body
      //   if(!email || !password){
      //     res.status(400).json({success: false, msg: 'Please enter required field to login'})
      //   }

      //     try {

      //       const user = await User.findOne({email})
      //       if(user){
      //         const compare = await bcrypt.compare(password, user.password)

      //          const token = await jwt.sign({_id: user._id}, process.env.JWT_SECRET)
      //             res.cookie('jwtoken', token, {
      //               expires : new Date(Date.now() + 3600*1),
      //               httpOnly : true
      //             })
                 
      //            //res.status(200).json({success: false, msg: 'Oops User not found' ,token:token})

      //         if(!compare){
      //           res.status(400).json({success: false, msg: 'Invalid credentials'})
      //         }else{
      //           res.status(200).json({success: true, msg: 'Logged in successfully',token:token})
      //         }
      //       }else{
      //         res.status(400).json({success: false, msg: 'Oops User not found'})

      //       }

            
            
            
      //     } catch (error) {
      //       res.status(400).json({success: false, msg: 'Oops login failed'})
      //     }
            

      //   res.send('Hello from login')
      // };


      static loginUser = async  (req,res) =>{
           try {
            const user = await User.findOne({
              email: req.body.email,
            })
          
            if (!user) {
              return { status: 'error', error: 'Invalid login' }
            }
          
            const isPasswordValid = await bcrypt.compare(req.body.password,user.password)
          
            if (isPasswordValid) {
              const token = jwt.sign({id: user._id, name: user.name},process.env.JWT_SECRET,{ expiresIn: "30m" })
          
              return res.json({ status: 'ok',msg:  'Log in successfully', user: token })
            } else {
              return res.json({ status: 'error', user: false })
            }
             
           } catch (error) {
             
           }
      }
      

      static logout = async (req,res) => {

          req.logout()
          res.redirect('/login')
        
      };
    

  }

  export default UserController



