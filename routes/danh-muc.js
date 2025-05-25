import {Router}  from "express";
import pool from "../db.js";

const router = Router();
router.get('/', async(req,res)=>{
    try {
        // const [rows, fields] = await pool.query(`SELECT * FROM danhmuc.content`);
        res.render('danh-muc',{listItem:''});
    } catch (error) {
        console.log(error)
        res.status(500).send("Lỗi máy chủ");
    }
})

router.get('/submit', async(req,res)=>{
    const key = req.query.keyword;
    const value = req.query.type;
    console.log("key: " + key)
    console.log("value: " + value)
    switch (value) {
        case "hoatchat":
            try {
                const [rows, fields] = await pool.query(`SELECT * FROM danhmuc.content where LOWER(name_active) LIKE LOWER(?)`,[`%${key}%`]);
                console.log(rows)
                res.render('partials/danh-muc-con',{listItem: rows})
            } catch (error) {
                console.log(error)
                res.status(500).send("Lỗi máy chủ");
            }       
            break;
        
        case "congty":
            try {
                const [rows, fields] = await pool.query(`SELECT * FROM danhmuc.content where LOWER(com_reg) LIKE LOWER(?)`,[`%${key}%`]);
                console.log(rows)
                res.render('partials/danh-muc-con',{listItem: rows})
            } catch (error) {
                console.log(error)
                res.status(500).send("Lỗi máy chủ");
            }       
            break;

        case "doituong":
            try {
                const [rows, fields] = await pool.query(`SELECT * FROM danhmuc.content where LOWER(control) LIKE LOWER(?)`,[`%${key}%`]);
                console.log(rows)
                res.render('partials/danh-muc-con',{listItem: rows})
            } catch (error) {
                console.log(error)
                res.status(500).send("Lỗi máy chủ");
            }       
            break;
        default:
            break;
    }
})

export default router;