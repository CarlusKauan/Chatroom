const express = require('express');
const path = require('path');

// criando a app
const app = express();
const server = require('http').createServer(app);

const io = require("socket.io")(server);

// passando caminho com path
app.use(express.static(path.join(__dirname+"/public")));

// socket.io
io.on("connection", function(socket){
    socket.on("newuser", function(username){
        socket.broadcast.emit("udpate", username + " joined the conversation");
    });
    socket.on("exituser", function(username){
        socket.broadcast.emit("udpate", username + " left the conversation");
    });
    socket.on("chat", function(message){
        socket.broadcast.emit("chat", message);
    });
});

server.listen(5000);
