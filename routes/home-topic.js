import { Router } from "express";
import pool from "../db.js";


const router = Router();

router.get('/', async(req,res)=>{
    try {
        res.render('home-topic');
    } catch (error) {
        console.log(error)
        res.status(500).sned("Lỗi máy chủ");
    }
});
export default router;