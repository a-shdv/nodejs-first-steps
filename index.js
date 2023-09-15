const Logger = require('./log')
const logger = new Logger()

// on - создаёт событие
logger.on('test', (args) => {
    const {id, text} = args
    console.log(id, text)
})

logger.print('User has logged in!')