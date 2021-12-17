import jwt from 'jsonwebtoken'
import User from '../models/Users.js'




const tokenAuthentication = async (req,res,next) =>{
 
        try {
            const token = await request.headers.authorization.split(" ")[1];

            const decode = await jwt.verify(token,process.env.JWT_SECRET)
            const rootUser = await User.findOne({_id : validate._id,  "token:token":token})
            if(!rootUser){
                res.status(400).json({msg : 'User not found '}) 
            }
            
            const user = await decode;
            req.user = user
            
            next()
        } catch (error) {
            res.status(400).json({msg : 'No token accessed, authorization denied'})
        }

}
export default tokenAuthentication