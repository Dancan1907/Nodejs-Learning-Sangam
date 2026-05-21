//creating some roiutes for an express application
const express = require('express');
const app = express();

// Define routes //root route
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.get('/about', (req, res) => {
    res.send('This is the About page');
});

app.get('/contact', (req, res) => {
    res.send('This is the Contact page');
});

//get all prodocts
app.get('/products', (req, res) => {
    //fetch products from database
    const products = [
        { id: 1, label: 'Product 1' },
        { id: 2, label: 'Product 2' },
        { id: 3, label: 'Product 3' }
    ];
    res.json(products);
});

//get a single product by id
app.get('/products/:id', (req, res) => {
    //fetch product from database
    const productById = parseInt(req.params.id);
    const product = [
        { id: 1, label: "Product 1" },
        { id: 2, label: "Product 2" },
        { id: 3, label: "Product 3" }
    ];

    const getSingleProduct = product.find(p => p.id === productById);
   
    if (getSingleProduct) {
         res.json(getSingleProduct);
    } else {
        res.status(404).send({ message: 'Product not found please check your id' });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
