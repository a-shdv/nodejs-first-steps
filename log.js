const EventEmitter = require('events')

class Logger extends EventEmitter {
    print = (msg) => {
        console.log(msg)

        // emit - вызывает событие
        this.emit('some_event', {id: 666, text: 'print() method has worked!'})
    }
}

module.exports = Logger