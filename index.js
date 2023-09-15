import express from 'express'
import path from 'path'

const app = express()

// to use templates engine use the following:
app.set('view engine', 'ejs')

const PORT = 3000

const createPath = (page) => path.resolve(`./templates/${page}`)

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`The server has been started on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.render(createPath('index.ejs'))
})

app.get('/about', (req, res) => {
    res.render(createPath('about.ejs'))
})

// use() method to create a middleware
app.use((req, res) => {
    res
        .status(404)
        .render (createPath('error.ejs'))
})