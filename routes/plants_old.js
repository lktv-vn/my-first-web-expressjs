import db from "../db.js";

// Route lấy dữ liệu và render ra trang HTML
const getPlants = (req, res) => {
  const query = "SELECT * FROM planttable";
  
  db.query(query, (err, results) => {
    if (err) {
      console.error("Lỗi khi truy vấn:", err);
      return res.status(500).send("Lỗi server!");
    }
    
    // Render dữ liệu lên trang HTML sử dụng EJS
    res.render('plants', { plants: results });
  });
};

export default getPlants;
