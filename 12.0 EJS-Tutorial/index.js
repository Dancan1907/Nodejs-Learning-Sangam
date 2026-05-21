//EJS Embedded JavaScript templating
//EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. It is used to create dynamic web pages by embedding JavaScript code within HTML templates.
//To use EJS, you need to install it first. You can do this using npm (Node Package Manager) by running the following command in your terminal:
//(initialize npm in your project folder first by running npm init -y)
//Then install EJS together with Express (a web application framework for Node.js) by running the following command:
//npm install express ejs
//Once you have EJS installed, you can create an EJS template file with the .ejs extension. For example, you can create a file called index.ejs with the following content:
/*
<!DOCTYPE html> 
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html> 
*/

const express = require('express');
const path = require('path');
const app = express();

//set the view engine to ejs and specify the directory for the views
app.set('view engine', 'ejs');

//set the directory for the views to be the 'views' folder in the current directory
app.set('views', path.join(__dirname, 'views'));

const products = [
    { id: '1', title: 'Product 1', price: 10 },
    { id: '2', title: 'Product 2', price: 20 },
    { id: '3', title: 'Product 3', price: 30 }
];

app.get('/', (req, res) => {
    res.render('home', { title: 'Home', products : products});
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About', products : products});
});
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 
