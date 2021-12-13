import mongoose from 'mongoose'


const ProductSchema = new mongoose.Schema({
    name  : {
        type: String,
        required: true ,
    },
    pic : {
        type: String,
        default : 'https://m.media-amazon.com/images/I/81t2A6uhm4L._SL1500_.jpg'

    },
   price : {
       type : Number,
       default :0
   }

    
},{timestamps : true})

const Product = mongoose.model('Product', ProductSchema)
export default Product;