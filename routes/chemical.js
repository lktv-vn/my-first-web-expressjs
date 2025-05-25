import { Router } from "express";
import { listItem } from "../public/data/chemical.js";
import { listPlantsItem } from "../public/data/plants.js"; // dùng làm ví dụ
import pool from "../db.js";

const router = Router();

router.get('/', async (req, res) => {
    try {
        const [rows, fields] = await pool.query(`SELECT * FROM chemicals.content_v2`);
        // console.log({ smallMenu: rows });
        res.render('chemical', {smallMenu: rows, idMenu: 0 });
    } catch (error) {
        console.error(error);
        res.status(500).send('Lỗi máy chủ');
    }
});

router.get('/chemical-frac', async (req, res) => {

    try {
        const [rows, fields] = await pool.query(`SELECT * FROM chemicals.content_v2`);
        // console.log({ smallMenu: rows });
        res.render('chemical-frac', {});
    } catch (error) {
        console.log(error);
        res.status(500).send('Lỗi máy chủ');
    }
});

router.get('/chemical-irac', async (req, res) => {

    try {
        const [rows, fields] = await pool.query(`SELECT * FROM chemicals.content_v2`);
        // console.log({ smallMenu: rows });
        res.render('chemical-irac', {});
    } catch (error) {
        console.log(error);
        res.status(500).send('Lỗi máy chủ');
    }
});



router.get('/chemical-frac/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
        const [rows, fields] = await pool.query(`SELECT * FROM chemicals.content_v2`);
        console.log(rows);
        res.render('chemical-frac-phan_nhom', {smallMenu: rows, idMenu: userId-1 });
    } catch (error) {
        console.log(error);
        res.status(500).send('Lỗi máy chủ');
    }
});

router.get('/chemical-irac/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
        const [rows, fields] = await pool.query(`SELECT * FROM chemicals.content_v2`);
        console.log(rows);
        res.render('chemical-frac-phan_nhom', {smallMenu: rows, idMenu: userId-1 });
    } catch (error) {
        console.log(error);
        res.status(500).send('Lỗi máy chủ');
    }
});



export default router;
