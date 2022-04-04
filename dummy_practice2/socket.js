const Websocket = require("ws")

module.exports = (server) => {
    const wss = new Websocket.Server({server});

    wss.on("connection", (ws,req)=>{ //웹 소켓 연결시
        

        wss.on("message",(data)=> { //클라이언트로부터 메세지 수신시
        
        });

        wss.on("error",(err)=> { //에러 발생시
        
        });

        wss.on("close",()=> { //종료시
        
        });

        ws.interval = setInterval(()=>{
            if('') {
                ws.send(``)
            }
            
        },3000);






    });
}
