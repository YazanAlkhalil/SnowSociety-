import express from 'express'
import mongoose from 'mongoose';
const app = express()
const port=333;

// mongoose.connect()

app.listen(port ,()=>console.log('listening on port'))