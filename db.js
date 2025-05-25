import mysql from 'mysql2/promise';

// Lấy thông tin kết nối từ biến môi trường (Heroku)
const pool = mysql.createPool({
  host: 'localhost', // IP hoặc domain của MySQL server
  user: 'heroku_user',   // User của MySQL server
  password: '0000', // Mật khẩu
  database: 'chemicals',     // Tên database
  port: 3306, // Port mặc định của MySQL là 3306
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// const pool = mysql.createPool({
//   host: process.env.DB_HOST || '192.168.1.3', // IP hoặc domain của MySQL server
//   user: process.env.DB_USER || 'heroku_user',   // User của MySQL server
//   password: process.env.DB_PASSWORD || '0000', // Mật khẩu
//   database: process.env.DB_NAME || 'chemicals',     // Tên database
//   port: process.env.DB_PORT || 3306, // Port mặc định của MySQL là 3306
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });

export default pool;


// cho VPS
// /config/db.js (Phiên bản tối giản)

// import mysql from 'mysql2/promise';
// import dotenv from 'dotenv';

// // 1. Load biến môi trường từ file .env
// dotenv.config();

// // 2. Định nghĩa cấu hình kết nối, lấy giá trị từ process.env
// //    Sử dụng '127.0.0.1' làm host mặc định cho MySQL trên cùng VPS.
// const dbConfig = {
//     host: process.env.DB_HOST || '192.168.1.3',
//     user: process.env.DB_USER || 'heroku_user',             // Giá trị này BẮT BUỘC phải có trong .env
//     password: process.env.DB_PASSWORD || '0000',         // Giá trị này BẮT BUỘC phải có trong .env
//     database: process.env.DB_DATABASE || 'plants',        // Giá trị này BẮT BUỘC phải có trong .env
//     port: process.env.DB_PORT || 3306,         // Cổng MySQL, mặc định 3306
//     waitForConnections: true,                  // Chờ nếu pool đầy
//     connectionLimit: process.env.DB_CONNECTION_LIMIT ? parseInt(process.env.DB_CONNECTION_LIMIT, 10) : 10, // Giới hạn kết nối, mặc định 10
//     queueLimit: 0                              // Không giới hạn hàng đợi
// };

// // 3. Tạo MySQL Connection Pool với cấu hình đã định nghĩa
// const pool = mysql.createPool(dbConfig);

// // 4. Xuất (export) pool để các module khác có thể sử dụng
// export default pool;

