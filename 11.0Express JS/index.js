//creating an express server
const express = require('express');
//to create an application
const app = express();
// The `express` module is a popular web application framework for Node.js that provides a simple and flexible way to build web applications and APIs. It is built on top of the `http` module and provides additional features and functionality for handling routing, middleware, and other aspects of web development.
// You can use the `express` module to create a server that listens for incoming requests and sends responses back to the client. It also provides a convenient way to define routes and handle different HTTP methods (GET, POST, etc.) for your application.

// Define a route for the root URL ('/') that sends a response back to the client with the message "Hello World!"   
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//to start the server  & listen to a specific port  
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});