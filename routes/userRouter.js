import {Router} from 'express';
import {getCurrentUser} from '../Controllers/userController.js'
 
const router = Router()

router.get('/current-user',getCurrentUser)




export default router