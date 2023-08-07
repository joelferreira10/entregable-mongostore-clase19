import { Router } from "express";
import { register,errorRegister,login,loginError,products} from "../controllers/view.controller.js";
const router=Router()

router.get('/',login)
router.get('/register',register)
router.get('/error-register',errorRegister)
router.get('/login-error',loginError)
router.get('/products',products)

export default router;