var http = require('http');
var dt = require('./datetime');

http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("Current Date is "+dt.myDateTime);
    res.end();
}).listen(8080);