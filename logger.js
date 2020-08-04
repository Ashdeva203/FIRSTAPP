var loginUrl = "http://log.ro.in";
console.log(__filename);
const EventEmitter = require('events'); // Class
// const emitter = new EventEmitter(); //object
 class Logger extends EventEmitter {
     log(message){
        console.log(message);
        //Raise a request
    this.emit('message Logged',{id:123,url: 'http://'});
    }

 }

module.exports = Logger;