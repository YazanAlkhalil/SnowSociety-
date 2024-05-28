import express from "express";
import path from 'path'
import multer from "multer";
// Middlewares // --------------------------------------------------
import { checkUserToken } from "../middlewares/Auth.js";
// Controllers // ---------------------------------------------------
import { login, register } from "../controllers/AuthController.js";
// ----------------------------------------------------------------
const router = express.Router()
const storage = multer.diskStorage({
  destination:function(req,file,cb,){
    cb(null,path.join(__dirname,'/images'))
  },
  filename:function (req,file,cb,){
    cb(null,file.originalname)
  }
})
const upload = multer({storage})
const  savFiles = upload.single('picture')


router.route('/register',savFiles)
.post(register)


router.post('/login',checkUserToken,login) 
// Export Route // -------------------------------
export default router