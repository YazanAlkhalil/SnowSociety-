import express from 'express'
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from '../controllers/AuthController.js';
import { checkUserToken } from '../middlewares/Auth.js';
const router = express.Router()
router.get('/:id',checkUserToken,getUser)
router.get('/:id/friends',checkUserToken,getUserFriends)
router.patch('/:id/:friendId',checkUserToken,addRemoveFriend)

export default router
