//routes/index.js 만들고, webSocket(server) 실행하고, socket.js에서
//const webSocket = require("ws")
// module.export = (server)
//------------//
const express = require("express")
const app = express();
const path = require("path");
const { client } = require("websocket");


const server = require("http").createServer(app)
const websocket = require("ws") 

app.use(express.static(path.join(__dirname,"src")))
const PORT = process.env.PORT || 8080

app.get('/', function(req,res){
    res.sendFile("/index")
});
server.listen(PORT,function(){
    console.log(`server is running on PORT: ${PORT}`)    
})

const wst = require("ws")

const wss = new wst.Server({port:8001})

wss.on("connection", ws =>{
    var initMessage = {message:"connection"};
    ws.send(JSON.stringify(initMessage));

    ws.on("message", data =>{

        console.log(`Received from user: ${data}`)
        broadcast(data);  // Return to client
        ws.send(`Received ${data} confirmed at Server`)
        
    }) 
})

function broadcast (data) {
    wss.clients.forEach(function (socket, i) {
        socket.send(data);
    });
}

