const http = require('http'),
fs       = require('fs'),
path     = require('path'),
static_contents = require('./modules/static.js'),
server   = http.createServer(static_contents);

server.listen(8000);
console.log("Running in localhost at port 8000");