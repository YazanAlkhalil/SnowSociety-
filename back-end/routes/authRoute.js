import express from "express";
import path from 'path'
// Middlewares // --------------------------------------------------
import { checkUserToken } from "../middlewares/Auth.js";
// Controllers // ---------------------------------------------------
import { login, register } from "../controllers/AuthController.js";
// ----------------------------------------------------------------
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

const router = express.Router()

router.route('/register',savFiles)
.post(register)


router.route('/login',checkUserToken) 
.post(login)
// Export Route // -------------------------------
export default router