const express = require("express");
const app     = express();
const http    = require("http").createServer(app);
const io      = require("socket.io")(http);

var port      = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket){

  socket.on("chat-message", function(msg){
    io.emit("chat-message", msg)
  });

});

http.listen(port);
