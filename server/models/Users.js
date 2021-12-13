import mongoose from 'mongoose'


const UserSchema = new mongoose.Schema({
    name  : {
        type: String,
        required: true ,
        trim : true,

    },
    email : {
        type: String,
        required: true

    },
    password : {
        type: String,
        required: true
    },
    dob : {
        type :String,
    },
    mobile : {
        type :Number,
        maxlength: 10
    }

    
},{timestamps : true})

const User = mongoose.model('User', UserSchema)
export default User;