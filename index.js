const http = require('http')

const PORT = 3000


const server = http.createServer((req, res) => {
    console.log(req.url, req.method) // url '/', method 'GET'

    res.setHeader('Content-Type', 'application/json')

    const data = JSON.stringify([
        { id: 1, name: 'John', surname: 'Doe' },
        { id: 2, name: 'Jane', surname: 'Doe'}
    ])

    res.write(data)

    res.end()

    // res.write('<h1>test...</h1>')
})

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`The server has been started on port ${PORT}`)
})