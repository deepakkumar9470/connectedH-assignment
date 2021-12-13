import express from 'express'


const router = express.Router()

import UserController from '../controllers/user-controller.js'
import ProductController from '../controllers/products-controller.js'

import tokenAuthentication from './../middlewares/authorization.js';


router.post('/register', UserController.register)


router.post('/login', UserController.loginUser)


router.post('/logout', UserController.logout)



// api/products
router.get('/products', ProductController.getProducts)



export default router

