const express = require('express');
const path = require('path');

// criando a app
const app = express();
const server = require('http').createServer(app);

// passando caminho com path
app.use(express.static(path.join(__dirname+"/public")));

server.listen(5000);
