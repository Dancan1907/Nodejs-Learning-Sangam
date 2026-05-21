// when dealing with APIs, it's common to use a framework like Express.js to handle routing
//  and server setup. Below is a simple example of an Express.js application that provides
//  a basic API for managing a collection of books.
//edit index.js in the package.json file to make it app.js and then run the command npm
// start to start the server. You can test the API endpoints using tools like Postman or curl.
//Always install express before running the server by using the command npm install express.
// This code sets up a simple Express.js server with routes to manage a collection of books.
// The API supports the following operations:
// 1. Get all books (GET /books)
// 2. Get a single book by ID (GET /books/:id)
// 3. Add a new book (POST /addbook)
// 4. Update an existing book (PUT /updatebook/:id)
// 5. Delete a book (DELETE /deletebook/:id)
//It also includes an introductory route (GET /) that welcomes users to the Book API. 
// The books are stored in an in-memory array for simplicity, and the server
//  listens on port 3000.

// A restful API (Representational State Transfer) is an architectural style for designing
//  networked applications. It relies on a stateless, client-server communication protocol, 
// typically HTTP. In a RESTful API, resources (such as books in this case) are identified by
//  URLs, and clients interact with these resources using standard HTTP methods (GET, POST, PUT, DELETE). 
//This is restful API because it uses HTTP methods (GET, POST, PUT, DELETE) to perform 
// CRUD operations on resources (books) and follows REST principles. Each endpoint corresponds 
// to a specific action on the resource, making it easy to understand and use.



const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

let books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: '1984', author: 'George Orwell' }
];

//intro route
app.get('/', (req, res) => {
    res.json({message: "Welcome to the Book API!"});
});


// Get all books
app.get('/books', (req, res) => {
    res.json(books);
});

//get a single book
//use the get method to retrieve a book by its id. The id should be passed as a route parameter. If the book is found, return it as a JSON response. If not, return a 404 status code with an appropriate message.
app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);
    if (book) {
        res.json(book);
    } else {
        res.status(200).json({ message: 'Book not found' });
    }
});

//add/create a new book
//use the post method to create a new book and add it to the books array. The new book should have an id, title, and author.
app.post('/addbook', (req, res) => {
    const { title, author } = req.body;
    const newBook = {
        id: books.length + 1,
        title: "The Matrix",
        author: "The Wachowskis"
    };
    books.push(newBook);
    res.status(201).json({ message: 'Book added successfully', book: newBook }  );
});

//update a bbok
//use the put method to update an existing book's title and author. The book's id should be
//  passed as a route parameter, and the new title and author should be provided in the request body.

app.put('/updatebook/:id', (req, res) => {
    const BookId = parseInt(req.params.id);
    const { title, author } = req.body;
    const findCurrentBook = books.find(b => b.id === BookId);
    if (findCurrentBook) {
        findCurrentBook.title = title;
        findCurrentBook.author = author;
        res.json({ message: 'Book updated successfully', book: findCurrentBook });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// delete a book
// use the delete method to remove a book from the books array. The book's id should be passed as a route parameter. If the book is found and deleted, return a success message. If not, return a 404 status code with an appropriate message.
app.delete('/deletebook/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const findIndexOfCurrentBook = books.findIndex(b => b.id === bookId);// b/item in the books array   
    if (findIndexOfCurrentBook !== -1) {
        const deletedBook = books.splice(findIndexOfCurrentBook, 1);
        res.json({ message: 'Book deleted successfully', book: deletedBook });//book/data
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

//start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
