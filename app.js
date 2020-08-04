
// function SayHello(name){
//     console.log("Hello" + name);
// }
//SayHello("asha");

 // Files Module
const fs = require('fs');
fs.readdir('./',function(err,files){
 if(err) console.log("error",err)
 else console.log("result",files);

});

//event Module
const EventEmitter = require('events'); // Class
//const emitter = new EventEmitter(); //object


const logger =  new eventLogger();
//register Listener
logger.on('message Logged',(arg) => {      //Instead of function can use arrow
    console.log('Listener called' , arg);
   });
logger.log('message');

//HTTP 

const http  = require('http');
const server = http.createServer(function (req,res){
      if(req.url === '/'){
          res.write('Helo Ash');
          res.end();
      }
      if(req.url === '/api/data')
       res.write(JSON.stringify([1,3,5]));
       res.end();

});
server.listen(4040);
console.log('Listening port 4040');




