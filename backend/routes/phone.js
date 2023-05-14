const express = require("express");
const pool = require("../config");

router = express.Router();

router.get("/phone", async function(req, res, next){
    const [data] = await pool.query('select * from phone')
    //returnให้จบfunc send รอบเดียว
    return res.send(data)
})

exports.router = router;
