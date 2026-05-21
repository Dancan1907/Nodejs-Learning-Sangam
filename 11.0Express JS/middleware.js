//This helps to understand how to use middleware in express js
const express = require('express');
const app = express();

// Define a simple middleware function
const myFirstMiddleware = (req, res, next) => {
    console.log('This is the first middleware & it runs for every request');
    next(); // Call the next middleware function
};

// Use the middleware
app.use(myFirstMiddleware);

// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.get("/about", (req, res) => {
  res.send("Welcome to the About Page!");
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
