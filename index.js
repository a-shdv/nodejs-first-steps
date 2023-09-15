const fs = require('fs')

// READ
// async function
fs.readFile('./text.txt', (error, data) => {
    console.log(data.toString())

    // DIRECTORY CREATION
    // sync function
    // Синхронные методы для того, чтобы задать порядок выполнения методов
    fs.mkdirSync('./files', () => {})

    // WRITE
    // sync function
    fs.writeFileSync('./files/another-text.txt', data, (error) => {
        error ? console.log(error) : null
    })
})

setTimeout(() => {
    // FILE DELETION
    fs.unlink('./files/another-text.txt', () => {})
    console.log('File has been succesfully deleted!')
}, 5000)

setTimeout(() => {
    // DIRECTORY DELETION
    fs.rmdir('./files', () => {})
    console.log('Directory has been succesfully deleted!')
}, 10000)