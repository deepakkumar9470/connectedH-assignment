
import Product from '../models/Products.js'



class ProductController {

    static getProducts = async (req,res) => {

          try {
              
              const products = await Product.find().sort({date:-1})
              res.status(200).json({success: true, msg: 'Products found',products:products})
          } catch (error) {
            res.status(400).json({success: false, msg: 'Oops products not found'})
          }
          
      }
   

  
  

}

export default ProductController



