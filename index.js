// GLOBAL OBJECTS
console.log(__dirname) // current directory absolute path
console.log(__filename) // current file absolute path

console.log(process) // useful variables
console.log(process.env) // sample
console.log(process.argv) // passing data through terminal

const url = new URL('https://localhost:8080/path/to#name?age=21')
console.log(url.hostname)
console.log(url.href)
console.log(url.pathname)
console.log(url.hash)