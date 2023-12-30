import { Router } from "express";
import { register, login, logout } from '../Controllers/authController.js'

const router = Router()

router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)


export default router
