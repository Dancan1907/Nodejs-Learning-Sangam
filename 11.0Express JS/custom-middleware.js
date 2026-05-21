const express = require('express');
const app = express();
// Define a custom middleware function
const requestTimesstampLogger = (req, res, next) => {
    const timeStamp = new Date().toISOString();
    console.log(`[${timeStamp}] Request received from ${req.method} ${req.url}`);
    next(); // Call the next middleware function
}
// Use the custom middleware
app.use(requestTimesstampLogger);

//start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});