#!/usr/bin/env node

// ServerCode here
var fs = require('fs');
var express = require('express');
var http = require('http');
var path = require('path');

// EXPRESS: BASE SETUP
// ==============================================
var app     = express();
var port    = process.env.PORT || 3000;
var server  = http.createServer(app);
var io = require('socket.io')(server);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  // Log every single request
  var d = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
  console.log(d, '['+req.ip+']', '->', req.originalUrl);
  next();
});


// ROUTES
// ==============================================

app.get("/", function(req, res) {
  res.render('index');
});
app.get("/0.2.0", function(req, res) {
  res.render('index2');
});

app.get("/0.3.0", function(req, res) {
  res.render('index3');
});

app.get("/0.3.2", function(req, res) {
  res.render('index32');
});



// WEB SOCKETS
// ==============================================
io.on('connection', function (socket) {
    console.log("socket", socket.id, "connected");
    socket.emit('hello', {users: ["jef","pol"], company:"imec"});

    socket.on('hello',function(data){
    	console.log(data);
    	io.sockets.emit('hello',data);
    });
    socket.on('iosono',function(data){
    	console.log(data);
    	io.sockets.emit('iosono',data);
    });
});



server.listen(port);
console.log("Server started in http://localhost:" + port);
