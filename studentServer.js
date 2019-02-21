var express = require('express');
var path = require("path");
var app = express();

// add an http server to serve files to the Edge browser
// due to certificate issues it rejects the https files if they are not // directly called in a typed URL
var http = require('http');
var httpServer = http.createServer(app);
httpServer.listen(4480);


// adding functionality to log the requests
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


app.use(express.static(__dirname));

