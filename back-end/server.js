import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import multer from 'multer'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url'
import connectDB from './db/connectDB.js'



const app = express()
import authRoute from './routes/authRoute.js'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config()
const port = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy : 'cross-origin'}))
app.use(morgan('common'))
app.use(bodyParser.json({limit : '30mb' , extended : true}))
app.use(bodyParser.urlencoded({limit : '30mb' , extended : true}))
app.use(cors())
app.use('/assets',express.static(path.join(__dirname,'public/assets')))
app.use('/auth',authRoute)

connectDB(MONGO_URL)
app.listen(port,()=>console.log(`Server Running on Port ${port}... `))
