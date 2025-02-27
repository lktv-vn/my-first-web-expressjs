import { menuItems } from '../data/menuItems.js';
import pool from "../../db.js";

const listMainMenu = [
  {name: 'Home', sortName: '', ls:''},
  {name: 'Plants', sortName: 'plants', ls:''},
  {name: 'Pests', sortName: 'pest', ls:''},
  {name: 'Chemicals', sortName: 'chemical', ls:''},
  {name: 'Fertilizers', sortName: 'fertilizers', ls:''},
  {name: 'HighTech Agriculture', sortName: 'hightech', ls:''},
];

const slideMenu = ['/img/slide1.jpg',
   '/img/slide2.jpg',
    '/img/slide3.jpg',
     '/img/slide4.jpg',
     '/img/slide5.jpg',
     '/img/slide6.jpg',
    ];

    const baiVietNoiBat = [
      {img:'', tieuDe:'Ứng dụng công nghệ hiện đại vào canh tác sầu riêng', link:'', timeUpdate:'18/2/2025', tomTat:'Hiện nay ứng dụng hệ thống tưới tự động đang dần giúp người nông dân giảm công lao động và gia tăng năng suất cầy trông' },
      {img:'', tieuDe:'Tác dụng của phân Hữu cơ ', link:'', timeUpdate:'', tomTat:''},
      {img:'', tieuDe:'Một số sâu bệnh hại và biện pháp phòng trị', link:'', timeUpdate:'', tomTat:''}, //dẫn link tới router pest
      {img:'', tieuDe:'', link:'', timeUpdate:'', tomTat:''},
      {img:'', tieuDe:'', link:'', timeUpdate:'', tomTat:''},
    ]

const ls ='';



const addMenuItems = async(req, res, next) => {
  const [fertilizer] = await pool.query('SELECT * FROM fertilizer.contents');
  res.locals.menuItems = menuItems; // Thêm vào res.locals để có sẵn trong các view
  res.locals.listMainMenu = listMainMenu;
  res.locals.slideMenu = slideMenu;
  res.locals.ls = ls;
  res.locals.fertilizer = fertilizer;
  // console.log(res.locals.fertilizer);
  next();
};
export default addMenuItems;
