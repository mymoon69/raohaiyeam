const express = require("express");
const pool = require("../config");

router = express.Router();

// router.get("/phone", async function(req, res, next){
//     const [data] = await pool.query('select * from phone')
//     //returnให้จบfunc send รอบเดียว
//     return res.send(data)
// })

router.get("/phone/:id", async function (req, res, next) {
    try {
        const [phone] = await pool.query('select * from phone where phone_id=?', [req.params.id])
        const [image] = await pool.query('select * from images where images_id=?', [req.params.id])
        //returnให้จบfunc send รอบเดียว
        return res.send({
            phone: phone,
            image: image
        });
    } catch (err) {
        res.send(err)
    }

})


router.put("/")

exports.router = router;