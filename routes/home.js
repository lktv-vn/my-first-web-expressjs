import { Router } from "express";
const router = Router();
import pool from "../db.js";

router.get('/', async(req, res) => {
    try {
        const [plants] = await pool.query(`select * from plant.content_v2`);
        const [chemicals] = await pool.query(`select * from chemicals.content_v2`);
        const [pest] = await pool.query(`select * from pest.content_v2`);
        const [fertilizer] = await pool.query(`select * from fertilizer.content_v2`);
        console.log(res.locals.ls);
        res.render('home', {plants: plants, chemicals: chemicals, pest: pest, fertilizer: fertilizer});
    } catch (error) {
        console.error('Lỗi trong quá trình truy vấn hoặc render:', error);
        res.status(500).send('Lỗi máy chủ');
    }
});

export default router;
