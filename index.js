const http = require('http')

const PORT = 3000

const server = http.createServer((req, res) => {
    console.log(req.url, req.method) // url '/', method 'GET'

    res.setHeader('Content-Type', 'application/json')

    const data = JSON.stringify([
        { id: 1, name: 'John', surname: 'Doe' },
        { id: 2, name: 'Jane', surname: 'Doe'},
        {id: 3, name: 'test', surname: 'test', hobbies: ['jogging', 'music', 'programming']}
    ])

    res.write(data)

    res.end()
})

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`The server has been started on port ${PORT}`)
})