import mysql from 'mysql2/promise';

// Lấy thông tin kết nối từ biến môi trường (Heroku)
const pool = mysql.createPool({
  host: process.env.DB_HOST || '192.168.1.3', // IP hoặc domain của MySQL server
  user: process.env.DB_USER || 'heroku_user',   // User của MySQL server
  password: process.env.DB_PASSWORD || '0000', // Mật khẩu
  database: process.env.DB_NAME || 'chemicals',     // Tên database
  port: process.env.DB_PORT || 3306, // Port mặc định của MySQL là 3306
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


export default pool;


