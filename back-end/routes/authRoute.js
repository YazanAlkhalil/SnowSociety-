import multer from "multer";
import express from "express";
import path from "path";
import bcrypt from "bcryptjs";
// import jwt from "jwt";
import User from "../models/User.js"
const router=express.Router()



const storage=multer.diskStorage({
    destination:function(req,file,cb){
      cb(null,path.join(__dirname,'/images'))
    },
    filename:function (req,file,cb){
      cb(null,file.originalname)
    }
  })
  const upload=multer({storage})
    

    router.post('regester',upload.single('picture'),async (req,res)=>{
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
    const hashpassword = await bcrypt.hash(passwords, 10);
            const newuser= new userModel(
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