const WebSocket = require("ws")
const ws = new WebSocket.Server({
    port: 9876

})

console.log(`sag hi to the server on port 9876`)