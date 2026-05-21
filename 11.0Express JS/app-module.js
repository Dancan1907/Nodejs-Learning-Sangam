//creating an express server
const express = require('express');
//to create an application
const app = express();

//application level settings
app.set('view engine', 'ejs');
app.set('views', './views');

//routing
app.get('/', (req, res) => {
    res.send('home page');
});

//post request
app.post('/api/data', (req, res) => {
    //handle post request
    res.json({
        message: 'Data received',
        data: req.body
    });
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something went Wrong!');
});

//to start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});