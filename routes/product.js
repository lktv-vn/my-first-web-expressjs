import { Router } from "express";
import pool from "../db.js";


const router = Router();
// const smallMenu = [];
const listItem = [];
router.get('/', async(req,res)=>{
    try {
        const [rows, fields] = await pool.query(`SELECT * FROM home.new_home
        WHERE img IS NOT NULL AND img !=''
        order by _type`);
        // console.log(rows);
        res.render('products',{content: listItem, productMenu: rows, idMenu: 0});
            
    } catch (error) {
        console.log(error);
        res.status(500).send("Lỗi máy chủ");
    }
});

// router.get('/:userId', async(req,res)=>{
//     const userId = req.params.userId;

//     try {
//         const [rows, fields] = await pool.query(`
//             SELECT * FROM plant.contents
//             `)
//             res.render('plants',{content: listItem, smallMenu: rows, idMenu: userId-1})
//     } catch (error) {
//         console.log(error)
//         res.status(500).sned("Lỗi máy chủ");
//     }

    
// });

export default router;