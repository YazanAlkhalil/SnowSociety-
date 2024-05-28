import multer from "multer";
import express from "express";
import path from "path";
import bcrypt from "bcryptjs";
// import jwt from "jwt";
import User from "../models/User.js"
const router=express.Router()
const app=express();
app.use(express.json())



const storage=multer.diskStorage({
    destination:function(req,file,cb){
      cb(null,path.join(__dirname,'../public/assets'))
    },
    filename:function (req,file,cb){
      cb(null,file.originalname)
    }
  })
  const upload=multer({storage})
    
  router.get('/hi',(Req,res)=>{
    res.send('done')
  })
  
router.post('/regester',async (req,res)=>{
      console.log("regester is successfuly");
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
            }=req.body
            const salt=await bcrypt.genSalt()
    const hashpassword = await bcrypt.hash(passwords, salt);
            const newuser= new User(
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
            const saveuser=await newuser.save()
            res.status(201).send(saveuser)
            }

        
        catch(err){
            res.status(500).json({message:err.message})
        }
    })
export default router