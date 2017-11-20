// Require/import the HTTP module
// This, in essence, is a package ("small box") 
//which allows our server ("big box") to have the 
//capability of handling http requests and responses. 
//HTTP is package that comes with the standard Node library.
var http = require("http");

// Define a port to listen for incoming requests
var PORT1 = 7000;
var PORT2 = 7500;

// Create a function which handles incoming requests and sends responses
function handleRequest1(request, response) {
  response.end("Can anyone really understand Javascript? ");
}
function handleRequest2(request, response) {
	response.end("JavaScript is a necessary pain! ");
}

// Start our server
var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);


server1.listen(PORT1, function() {

  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORT1);
});

server2.listen(PORT2, function() {

  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORT2);
});