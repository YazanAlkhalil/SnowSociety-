import User from "../models/User.js";
import Post from "../models/Post.js";

export const createPost = async(res,req)=>{
  try {
      const {userId ,description,picturePath}=req.body
      const user = await User.findById
      const newPost = new Post({
          userId,
          firstName:user.firstName,
          lastName:user.lastName,
          location:user.location,
          description,
          userPicturePath:user.picturePath,
          picturePath,
          likes:{},
          comments:[]
      })
      await newPost.save()
      
      const post = await Post.find()
      res.status(201).json(post);


  } catch (error) {
      res.status(409).json({message:message.error})
  }
}

export const getFeedPosts = async(res,req)=>{
  try {
      const post = await Post.find()
      res.status(200).json(post);
  } catch (error) {
      res.status(409).json({message:message.error})
  }
}

export const getUserPosts = async(res,req)=>{
  try {
      const {userId}=req.params
      const post=await Post.find({userId})
      res.status(200).json(post);
  } catch (error) {
      res.status(409).json({message:message.error})
  }
}

export const likePost = async(res,req)=>{
  try {
      const {id} = req.params
      const {userId} = req.body
      const post = await Post.find(id)
      const isliked = post.likes.get(userId)

      if (isliked) {
          post.likes.delete(userId)
      }else{
          post.likes.set(userId,true)
      }

      const updatedPost = await Post.findByIdAndUpdate(
          id,
          {likes:post.likes},
          {new:true}
      )

      res.status(200).json(updatedPost);
  } catch (error) {
      res.status(404).json({message:message.error})
  }
}

