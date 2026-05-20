// Define routes for the server

const http = require('http');

const server = http.createServer((req, res) => { 
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Home Page!');
    }else if (url === '/projects') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the Projects Page!');
    }else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }
})

const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
