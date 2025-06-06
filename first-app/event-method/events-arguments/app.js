
const EventEmitter = require('events');



const Logger = require('./logger');
const logger = new Logger()

// Arrow Function
emitter.on('messageLogged', (arg) => {
     console.log('Listener called', arg);
});
 
Logger('message');