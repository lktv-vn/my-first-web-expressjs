import { Router } from "express";
const router = Router();
import pool from "../db.js";

router.get('/', async(req, res) => {
    try {
        let listMainMenu = res.locals.listMainMenu;
        
        // const [plants, plantsFields] = await pool.query('SELECT nameGroup FROM ${a}') ;
        try{
            const [plants, plantsFields] = await pool.query(`WITH CTE AS (
    SELECT
        nameGroup,
        id,
        ROW_NUMBER() OVER (PARTITION BY nameGroup ORDER BY id) AS rn
    FROM
        plant.contents
)
SELECT
    nameGroup,
    id
FROM
    CTE
WHERE
    rn = 1 ORDER BY
    id`) ;
            // console.log(plants);
            listMainMenu[1].ls = plants;
            // console.log(listMainMenu[1].ls);
        }catch (error) {
            console.error('Lỗi khi truy vấn bảng plant.contents:', error.message);
        }
        try{
            const [chemicals, plantsFields] = await pool.query(`WITH CTE AS (
    SELECT
        nameGroup,
        id,
        ROW_NUMBER() OVER (PARTITION BY nameGroup ORDER BY id) AS rn
    FROM
        chemicals.contents
)
SELECT
    nameGroup,
    id
FROM
    CTE
WHERE
    rn = 1 ORDER BY
    id`) ;
            listMainMenu[3].ls = chemicals;
        }catch (error) {
            console.error('Lỗi khi truy vấn bảng plant.contents:', error.message);
        }
        try{
            const [pest, plantsFields] = await pool.query(`WITH CTE AS (
    SELECT
        nameGroup,
        id,
        ROW_NUMBER() OVER (PARTITION BY nameGroup ORDER BY id) AS rn
    FROM
        pest.contents
)
SELECT
    nameGroup,
    id
FROM
    CTE
WHERE
    rn = 1 ORDER BY
    id`) ;
            listMainMenu[2].ls = pest;
    
        }catch (error) {
            console.error('Lỗi khi truy vấn bảng plant.contents:', error.message);
        }
        try{
            const [fertilizer, plantsFields] = await pool.query(`WITH CTE AS (
    SELECT
        nameGroup,
        id,
        ROW_NUMBER() OVER (PARTITION BY nameGroup ORDER BY id) AS rn
    FROM
        fertilizer.contents
)
SELECT
    nameGroup,
    id
FROM
    CTE
WHERE
    rn = 1 
    ORDER BY
    id`) ;
            listMainMenu[4].ls = fertilizer;
            res.locals.ls = fertilizer;
        }catch (error) {
            console.error('Lỗi khi truy vấn bảng plant.contents:', error.message);
        }
        let renderData = {
            title: 'Trang chủ',
            content: 'Đây là nội dung phải không',
            logoImage: '/img/logo-YouTube.png',
            listMainMenu: listMainMenu,
  
            
        }
        console.log(res.locals.ls);
        res.render('home', renderData);
    } catch (error) {
        console.error('Lỗi trong quá trình truy vấn hoặc render:', error);
        res.status(500).send('Lỗi máy chủ');
    }
});

export default router;
