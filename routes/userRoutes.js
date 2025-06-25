import express from 'express'
import { createUser, deleteUser, getAllUsers } from '../controllers/userControllers.js'


const router = express.Router()


router.post('/user',createUser )
router.get('/user', getAllUsers)
router.delete('/user/:id', deleteUser)

export default router