//routes/index.js 만들고, webSocket(server) 실행하고, socket.js에서
//const webSocket = require("ws")
// module.export = (server)
//------------//
const express = require("express")
const app = express();
const path = require("path");
const { client } = require("websocket");
const url = require("url")

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
var connects = []

wss.on("connection", function(ws,req) {
    var location = url.parse(req.url, true);

    var initMessage = {message:"connection"};
    ws.send(JSON.stringify(initMessage));
    connects.push(ws);
    console.log("New Client Connected : " + connects.length);

    ws.on("message", data =>{
        
        console.log(`Received from user: ${data}`)
        var msg = 100
        ws.send(msg);
        broadcast(msg);  // Return to client
    }) 
})


function broadcast (data) {
    connects.forEach(function (anything, i) {
        anything.send(data);
    });
}