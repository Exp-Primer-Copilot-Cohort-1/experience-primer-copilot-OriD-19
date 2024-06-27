// Create web server

// Include the http module
var http = require('http');

// Create an HTTP server
http.createServer(function (req, res) {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body "Hello World"
    res.end('Hello World\n');
}).listen(8080); // Bind the server to listen on port 8080

// Print URL for accessing server
console.log('Server running at http://