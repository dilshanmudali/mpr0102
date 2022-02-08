import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

//routes
import postRoutes from './routes/posts.js'


//1. initialize app with express
const app = express()
dotenv.config()
//use express middleware to use routes


//2. after initializing app we can use methods on the app instance

//bodyparser to handle post requests 
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

//initialize cors with app to enable cross origin requests
app.use(cors())

app.use('/posts', postRoutes)
const PORT = process.env.PORT || 5000;

//mongo db connection
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch(error => console.log(error.message))


//stops errors on console
// mongoose.set('useFindAndModify', false)