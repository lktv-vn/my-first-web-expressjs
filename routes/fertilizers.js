import { Router } from "express";
import pool from "../db.js";


const router = Router();
const smallMenu = [];
const listItem = [];
router.get('/', async(req,res)=>{
    try {
        const a =14;
        const [rows, fields] = await pool.query(`
            SELECT * FROM fertilizer.content_v2 where id = ${a}
            `)
            console.log(rows);
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
            SELECT * FROM fertilizer.content_v2
            `)
            //`
            // SELECT * FROM fertilizer.content_v2 where id = ?
            // `,[userId]
            console.log(rows.length);
            res.render('fertilizer-detail',{smallMenu: rows[userId-1], allMenu: rows})
    } catch (error) {
        console.log(error)
        res.status(500).send("Lỗi máy chủ");
    }

});

export default router;