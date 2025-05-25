import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// 1. Import pool từ file cấu hình db.js (đã được tối giản)
import pool from './config/db.js'; // <-- Đảm bảo đường dẫn này chính xác

// 2. Import các routes và middleware khác
import addMenuItems from './public/middlewares/menuMiddleware.js';
import home from './routes/home.js';
import plants from './routes/plants.js';
import pest from './routes/pest.js';
import chemical from './routes/chemical.js';
import fertilizers from './routes/fertilizers.js';
import product from './routes/product.js';

// 3. Load biến môi trường (vẫn cần cho PORT, NODE_ENV, và để db.js hoạt động)
dotenv.config();

// 4. Thiết lập các biến __filename và __dirname cho ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 5. Khởi tạo ứng dụng Express
const app = express();

// 6. Định nghĩa PORT (quan trọng cho VPS và tương thích với PM2/Nginx)
const PORT = process.env.PORT || 3500

// 7. Cấu hình View Engine (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// --- Middlewares ---

// 8. Phục vụ file tĩnh (CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'public')));

// 9. Middleware để đọc body của request (quan trọng nếu có form POST hoặc API)
app.use(express.json()); // Cho JSON payloads
app.use(express.urlencoded({ extended: true })); // Cho form data

// 10. Middleware để inject DB Pool vào mỗi request
//     Giúp các route handler dễ dàng truy cập DB pool qua `req.dbPool`
const injectDbPool = (req, res, next) => {
    req.dbPool = pool; // Gắn pool đã import từ db.js vào đối tượng request
    next();
};
app.use(injectDbPool); // Áp dụng middleware này cho tất cả các route bên dưới

// 11. Áp dụng middleware tùy chỉnh của bạn (ví dụ: menu)
app.use(addMenuItems);

// --- Routes ---
// 12. Gắn các route handler vào các đường dẫn tương ứng
app.use('/', home);
app.use('/plants', plants);
app.use('/pest', pest);
app.use('/chemical', chemical);
app.use('/fertilizers', fertilizers);
app.use('/products', product);

// --- Error Handling (Vẫn nên có cơ bản) ---

// 13. Bắt lỗi 404 (Not Found) - đặt sau tất cả các route khác
app.use((req, res, next) => {
    // Giả sử bạn có view 404.ejs và muốn hiển thị menu nếu có
    res.status(404).render('404', {
        title: 'Page Not Found',
        menuItems: req.menuItems || []
     });
});

// 14. Middleware xử lý lỗi chung (500 - Internal Server Error) - đặt cuối cùng
app.use((err, req, res, next) => {
    console.error("Unhandled Error:", err.stack || err); // Log lỗi ra console server
    // Giả sử bạn có view error.ejs
    res.status(500).render('error', {
        title: 'Server Error',
        message: 'Something went wrong on our side!',
        menuItems: req.menuItems || []
        // Không nên gửi chi tiết lỗi (err) cho client trong môi trường production
    });
});


// --- Khởi động Server ---
// 15. Lắng nghe trên cổng đã cấu hình
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`   Access locally at: http://localhost:${PORT}`);
    // Lưu ý: Trên VPS, bạn thường sẽ truy cập qua IP hoặc domain của VPS (cổng 80/443)
    // nếu bạn sử dụng reverse proxy như Nginx.
});

// Không cần export gì từ app.js (trừ khi bạn viết tests cần app instance)