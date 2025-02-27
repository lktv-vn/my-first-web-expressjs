import mysql from 'mysql2/promise.js';

// Tạo nhóm kết nối đến cơ sở dữ liệu MySQL
const pool = mysql.createPool({
  host: 'localhost', // Thay bằng host của bạn
  user: 'root',      // Thay bằng user của bạn
  password: '0000',  // Thay bằng mật khẩu của bạn
  database: 'chemicals' // Thay bằng tên database của bạn
});

// Export nhóm kết nối để sử dụng ở các module khác
export default pool;
