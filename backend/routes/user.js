const express = require("express")
const pool = require("../config")
const Joi = require('joi')
const bcrypt = require('bcrypt');
const { generateToken } = require("../utils/token");

router = express.Router();

router.get('/user', async (req, res, next) => {
    const [data] = await pool.query('select * from user')
    //returnให้จบfunc send รอบเดียว
    return res.send(data)
})

// สำหรับ login
const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
})

router.post('/user/login', async (req, res, next) => {
    // เช็คว่าตามที่กำหนดใน Joi ไหม
    try {
        await loginSchema.validateAsync(req.body, { abortEarly: false })
    } catch (err) {
        return res.status(400).send(err)
    }

    const username = req.body.username
    const password = req.body.password

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try {
        // เช็คว่ามี username ไหม
        const [users] = await conn.query('select * from login where username = ?', [username])
        console.log(users)

        const user = users[0]
        // เช็คว่ามี username ไหม
        if (!user) {
            throw new Error('Incorrect username or password')
        }

        //เช็คว่า password ถูกไหม
        if (!(await bcrypt.compare(password, user.password))) {
            throw new Error('Incorrect username or password')
        }

        // check เคยเข้าสู่ระบบไหม
        const [tokens] = await conn.query(
            'select * from token where user.id = ?', [user.id]
        )
        let token = tokens[0]?.token
        // ถ้าไม่เคย login ต้องสร้าง token
        if (!token) {
            token = generateToken()
            await conn.query('insert into token(user_id, token) values (?, ?)', [user.id, token])
        }

        conn.commit()
        res.status(200).json({'token' : token})
    } catch (err) {
        conn.rollback()
        res.status(400).json(err.toString())
    } finally {
        conn.release()
    }

})

exports.router = router