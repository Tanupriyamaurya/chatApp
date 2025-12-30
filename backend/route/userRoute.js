import express from 'express'
import  isLogin  from "../middleware/isLogin.js"; 
import { getUserBySearch } from '../routeControler/userhandlerController.js'; 
import {getCorrectChatters} from '../routeControler/userhandlerController.js'; 
const router=express.Router();

router.get('/search',isLogin,getUserBySearch)
router.get('/currentchatters',isLogin,getCorrectChatters)
export default router;
