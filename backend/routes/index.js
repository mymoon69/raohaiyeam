const express = require("express");
const pool = require("../config");

router = express.Router();

router.get("/", async function(req, res, next){
  const [data] = await pool.query('select * from phone')
  //returnให้จบfunc send รอบเดียว
  return res.send(data)
})

// router.get("/", async function (req, res, next) {
  

    // try{
    //     // ค้นหาใน field title ของตาราง phone โดยใช้ SELECT * FROM phone WHERE model LIKE ? '%คำค้นหา%'
    //     const [rows, fields] = await pool.query("SELECT * FROM phone WHERE model LIKE ?", [
    //       `%${req.query.search}%`,
    //     ]);
    
    //     // return json ของรายการ phone
    //     return res.json(rows);
    
    //   } catch (err) {
    //       console.log(err)
    //       return next(err);
    //   }
//   try {
//     const search = req.query.search || ''
//     let sql = 'SELECT * FROM phone;'
//     let cond = []

//     if (search.length > 0) {
//       sql = 'SELECT a.*, b.file_path FROM blogs AS a LEFT JOIN (SELECT * FROM images WHERE main=1) AS b ON a.id = b.blog_id WHERE a.title LIKE ? OR a.content LIKE ?;'
//       cond = [`%${search}%`, `%${search}%`]
//     }
//     const [rows, fields] = await pool.query(sql, cond);
//     return res.json(rows);
//   } catch (err) {
//     return res.status(500).json(err)
//   }
// });

exports.router = router;
