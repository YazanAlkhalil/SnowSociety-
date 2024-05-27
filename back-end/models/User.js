import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        // required:true,
        min:2,
        max:50

    },  
    lastName:{
        type:String,
        // required:true,
        min:2,
        max:50,

    },
      email:{
        type:String,
        // required:true,
        min:2,
        max:50,
        unique:true

    },
    passwords:{
        type:String,
        // required:true,
        min:2,
        max:50,
        unique:true
    },
    picturepath:{
        type:String,
        default:""
    },
    friends:{
        type:Array,default:[]
    },
    location:String,
    occupation:String,
    viewedprofile:Number,
    impression:Number
},
{
    timestamps:true
})

const User=mongoose.model("User",userSchema)
export default User