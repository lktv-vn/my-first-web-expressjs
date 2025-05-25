import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import addMenuItems from './public/middlewares/menuMiddleware.js';

import danhMuc from './routes/danh-muc.js';
import homeTopic from './routes/home-topic.js';
import home from './routes/home.js';
import plants from './routes/plants.js';
import pest from './routes/pest.js';
import chemical from './routes/chemical.js';
import fertilizers from './routes/fertilizers.js';
import product from './routes/product.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3100;  // ✅ Heroku yêu cầu sử dụng process.env.PORT

// Cấu hình EJS làm view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public'))); // Sử dụng tài nguyên tĩnh (CSS, JS, images)

app.use(addMenuItems);

app.use('/', home);
app.use('/home-topic/plants', plants);
app.use('/home-topic/pest', pest);
app.use('/home-topic/chemical', chemical);
app.use('/home-topic/fertilizers', fertilizers);
app.use('/products', product);
app.use('/home-topic', homeTopic);
app.use('/danh-muc', danhMuc);

// Lắng nghe cổng từ Heroku hoặc cổng 3000 khi chạy local
app.listen(3100, () => {
    console.log(`Server is running on port ${PORT}`);
});
