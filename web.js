var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buf = fs.readFile('index.html');
var fileContent = buf.toString('utf8',0,buf.length);
console.log(fileContent);
app.get('/', function(request, response) {
  response.send(fileContent);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
