import express from "express"
import { sendMessage } from "../routeControler/messageroutController.js";
import isLogin from "../middleware/isLogin.js"
import { getMessages } from "../routeControler/messageroutController.js";
const router=express.Router();

router.post('/send/:id',isLogin,sendMessage)
router.get('/:id',isLogin,sendMessage,getMessages)

export default router;
