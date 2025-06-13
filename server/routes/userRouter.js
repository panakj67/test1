import express from 'express'
import { isAuthorised, login, logout, register } from '../controllers/userController.js';
import { authUser } from '../middlewares/authUser.js';

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/isAuth", authUser, isAuthorised);

export default router;