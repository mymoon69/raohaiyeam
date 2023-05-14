const express = require('express')

const app = express()
const cors = require('cors')
app.use(cors())

// Statics
app.use(express.static('static'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// routers
const indexRouter = require('./routes/index')
const phoneRouter = require('./routes/phone')
// const commentRouter = require('./routes/comment')
// const imageRouter = require('./routes/image')
// const userRouter = require('./routes/user')

app.use(indexRouter.router)
app.use(phoneRouter.router)
// app.use(commentRouter.router)
// app.use(imageRouter.router)
// app.use(userRouter.router)

app.listen(3001, () => {
  console.log('Example app listening at http://localhost:3001')
})