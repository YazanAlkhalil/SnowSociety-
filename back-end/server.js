import express from 'express'
import mongoose from 'mongoose';

import router from './routes/authRoute.js'
import User from "./models/User.js"

const app = express()
const port=3333;

app.use(express.json())




mongoose.connect("mongodb://127.0.0.1:27017/social").then(()=>{
    console.log("connection is done");
})

app.post('/add',)
app.get('/',(req,res)=>{
    res.send('test is successfuly')
})
app.use('/auth',router)

app.listen(port ,()=>console.log('listening on port'))