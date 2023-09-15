const fs = require('fs')
const zlib = require('zlib')

const readStream = fs.createReadStream('./files/text.txt')
const writeStream = fs.createWriteStream('./files/another-text.txt')
const compressStream = zlib.createGzip()

// readStream.on('data', (chunk) => {
//     writeStream.write(chunk)
// })

// THE SAME AS

const handleError = () => {
    console.log('Error during writing chunks into file.')
    readStream.destroy()
    writeStream.end('Finished with error...')
}

readStream
    .on('error', handleError)
    .pipe(compressStream) // the data give will be compressed (check ./files/another-text.txt)
    .pipe(writeStream) // duplex mode
    .on('error', handleError)

