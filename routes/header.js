import { Router } from "express";
import { menuItems } from "./data/menuItems.js";
const router = Router();

router.get('/', (req,res)=>{
    res.render('partials/header',{menuItems})
})
export default router;