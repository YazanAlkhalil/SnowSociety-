import exprees from 'express'
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from '../controllers/users.js';
import { checkUserToken } from '../middlewares/Auth.js';
const router=exprees.Router()
router.get('/:id',checkUserToken,getUser)
router.get('/:id/friends',checkUserToken,getUserFriends)
router.patch('/:id/:frienId',checkUserToken,addRemoveFriend)

export default router
