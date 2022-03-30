const express = require("express");
const app = express();
const server = require("http").createServer(app)
const path = require("path")
const socket = require("socket.io");
const io = socket(server)


app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 8080 ;

server.listen(PORT, linkMsg)
	function linkMsg(){
		console.log(`server is running on port: ${PORT}`)
    }

//server.listen(PORT,() => console.log(`server is running ${PORT}`))

app.get("/", function(req, res){
    res.sendFile("C:/Users/.MILL_JUN/Desktop/nodejs/node_chat_test/src/index.html")
})

