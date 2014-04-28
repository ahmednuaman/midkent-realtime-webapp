var express = require('express'),
    app,
    server;

app = express();
server = require('http').createServer(app);

server.listen(8001);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.use('/', express.static(__dirname + '/'));