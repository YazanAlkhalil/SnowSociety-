import express from 'express'
import { createPost, getFeedPosts, getUserPosts, likePost } from '../controllers/postController.js'
const router = express.Router()


router.route('/create')
.post(createPost)

router.route('/get/all')
.get(getFeedPosts)

router.route('get/:userId')
.get(getUserPosts)

router.route('get/like/:id')
.post(likePost)

export default router