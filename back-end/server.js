import express from 'express'
import mongoose from 'mongoose';
const app = express()
const port=333;
import router from './routes/authRoute.js'
mongoose.connect("mongodb://127.0.0.1:27017/social").then(()=>{
    console.log("connection is done");
})



app.use('auth',router)

app.listen(port ,()=>console.log('listening on port'))