import { Router } from "express";
import { login,  logout,  signup } from "../controllers/userController.js";

const UserRouter = Router();

UserRouter.put('/signup',signup)
UserRouter.post('/login',login)
UserRouter.get('/logout',logout)

export default UserRouter;