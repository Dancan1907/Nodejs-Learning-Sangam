//creating a http server
const http = require('http');

// The `http` module in Node.js allows you to create an HTTP server and handle HTTP requests and responses.
//  It is a built-in module, so you don't need to install it separately. You can use the `http` module

//  to create a server that listens for incoming requests and sends responses back to the client.
   // Set the response header to indicate that the content type is plain text

  //Write the response header with a status code of 200 (OK) and a content type of 'text/plain'. 
  // This tells the client that the response is successful and that the content being sent back is plain text.
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send a response back to the client with the message "Hello, World!"
  res.end('Hello from Node.js the server is running, World!');
});
  // This callback function is executed every time a request is received by the server.
  // The `req` parameter represents the incoming request, and the `res` parameter represents the response
// that will be sent back to the client.
  
// Start the server and listen on port 3000
//create a port for the server to listen on, and provide a callback function that will be executed once the server starts listening.  
const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});