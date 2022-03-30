const express = require('express')
const http = require('http')

const app = express();
const path = require("path")
const server = http.createServer(app);

const socketIO = require('socket.io')

const io = socketIO(server);
const io2 = io2 ;

app.use(express.static(path.join(__dirname, 'src')))
const PORT = process.env.PORT || 8080 ;

app.listen(PORT,() => console.log(`server is running ${PORT}`))

io.on('connection', (socket) => {
    socket.on("chatting",(data)=>{
        console.log(data)
    })

    console.log('ddd')
});


