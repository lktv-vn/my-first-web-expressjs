import { Router } from "express";
import pool from "../db.js";


const router = Router();
const smallMenu = [];
const listItem = [];
router.get('/', async(req,res)=>{
    try {
        const [rows, fields] = await pool.query(`
            SELECT * FROM fertilizer.contents
            `)
            // console.log(rows);
            res.render('fertilizers',{content: listItem, smallMenu: rows, idMenu: 0});
    } catch (error) {
        console.log(error)
        res.status(500).sned("Lỗi máy chủ");
    }
});

router.get('/:userId', async(req,res)=>{
    const userId = req.params.userId;

    try {
        const [rows, fields] = await pool.query(`
            SELECT * FROM fertilizer.contents
            `)
            res.render('fertilizers',{content: listItem, smallMenu: rows, idMenu: userId-1})
    } catch (error) {
        console.log(error)
        res.status(500).sned("Lỗi máy chủ");
    }

});

export default router;