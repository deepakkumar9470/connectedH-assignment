import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
const PORT = process.env.PORT || 8000
import connectToDb from './db/db.js';
import userRoute from './routes/userRoute.js'
import productRoute from './routes/userRoute.js'
import cors from 'cors'


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:  true}))

app.use('/api/auth',userRoute)
app.use('/api',productRoute)



//connecting to database
connectToDb()


app.get('/', (req,res)=>{
    res.send('Hello from server')
})

app.listen(PORT, (req,res)=>{
    console.log(`Server started at http://localhost:${PORT}`)
})