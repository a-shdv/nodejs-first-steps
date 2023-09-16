const express = require('express')
const userRouter = require('./routes/user.routes.js')

const app = express()

// to use templates engine use the following:
app.set('view engine', 'ejs')

const PORT = 3000

app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`The server has been started on port ${PORT}`)
})