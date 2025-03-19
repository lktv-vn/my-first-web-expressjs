import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import addMenuItems from './public/middlewares/menuMiddleware.js';

import home from './routes/home.js';
import plants from './routes/plants.js';
import pest from './routes/pest.js';
import chemical from './routes/chemical.js';
import fertilizers from './routes/fertilizers.js';
import product from './routes/product.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;  // ✅ Heroku yêu cầu sử dụng process.env.PORT

// Cấu hình EJS làm view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public'))); // Sử dụng tài nguyên tĩnh (CSS, JS, images)

app.use(addMenuItems);

app.use('/', home);
app.use('/plants', plants);
app.use('/pest', pest);
app.use('/chemical', chemical);
app.use('/fertilizers', fertilizers);
app.use('/products', product);

// Lắng nghe cổng từ Heroku hoặc cổng 3000 khi chạy local
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
