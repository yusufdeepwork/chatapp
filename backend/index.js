const app = require('express')();
const http = require('http').createServer(app);
const socketIO = require('socket.io')(http,{
    cors: {
        origins: ['http://localhost:3000']
    }
});
const port =  5555;

socketIO.on('connection', socket => {
    socket.on('message', ({context, name}) => {
        console.log({context,name},"data")
        socketIO.emit('message',{context, name})
    })
})

http.listen(port, ()=> console.log("Chat app is running"));
