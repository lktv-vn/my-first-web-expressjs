import { Router } from "express";
import { listItem } from "../public/data/chemical.js";
import { listPlantsItem } from "../public/data/plants.js"; // dùng làm ví dụ
import pool from "../db.js";

const router = Router();

router.get('/', async (req, res) => {
    try {
        const [rows, fields] = await pool.query(`SELECT * FROM chemicals.contents`);
        console.log({ smallMenu: rows });
        res.render('chemical', { content: listItem, smallMenu: rows, idMenu: 0 });
    } catch (error) {
        console.error(error);
        res.status(500).send('Lỗi máy chủ');
    }
});

router.get('/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
        const [rows, fields] = await pool.query(`SELECT * FROM chemicals.contents`);
        console.log({ smallMenu: rows });
        res.render('chemical', { content: listItem, smallMenu: rows, idMenu: userId-1 });
    } catch (error) {
        console.log(error);
        res.status(500).send('Lỗi máy chủ');
    }
});

export default router;
