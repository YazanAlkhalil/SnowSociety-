import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
import User from '../models/User.js'
// Register Function // -------------------------------------------------------------
export async function register (req,res){
  try{
    const  {
        firstName,  
        lastName,
          email,
        passwords,
        picturepath,
        friends,
        location,
        occupation,
        viewedprofile,
        impression
    } = req.body
const hashpassword = await bcrypt.hash(passwords, 10);
    const newuser = new User(
    {   firstName,  
        lastName,
          email,
        passwords:hashpassword,
        picturepath,
        friends,
        location,
        occupation,
        viewedprofile:Math.floor(Math.random()*1000 ),
        impression:Math.floor(Math.random()*1000 ),
        
    })
    const saveuser = await newuser.save()
    res.status(201).send(saveuser)
    }
catch(err){
    res.status(500).json({message:err.message})
}
} 
// Login Function // ------------------------------------------------------------------
export async function login(req,res){
  try {
    const { email , password } = req.body
    const user = await User.findOne({email})
    if(!user){
      return res.status(400).json({msg: 'User Not Exist!'})
    }
    const isMatch = await bcrypt.compare(password , user.password)
    if(!isMatch){
      return res.status(400).json({msg: 'Incorrect Credentials!'})
    }
    const token = jwt.sign({ id: user._id },process.env.SECRET_KEY)
    delete user.password
    res.status(200).json({'Success!': token , user})
  } catch (error) {
    res.status(400).json({msg : error.message})
  }
}
console.log('u are the best')

