import mongoose from "mongoose";
const postSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
       lastName:{
        type:String,
        required:true,
    },
    location:String,
    description:String,
    picturepath:String,
    likes:{
        type:Map,
        of:Boolean,
    },
    Comment:{
        type:Array,
        default:[]
    }
},{timestamps:true}
)
const Post=mongoose.model("Post",postSchema)
export default Post
