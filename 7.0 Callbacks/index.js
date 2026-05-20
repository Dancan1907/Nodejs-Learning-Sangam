//This are functions that are passed as arguments to other functions and are executed at a
// later time when a specific event occurs or when a certain condition is met.
// In Node.js, callbacks are commonly used for handling asynchronous operations, such as
//  reading and writing files, making HTTP requests, or interacting with databases.
// They allow you to write non-blocking code and handle the results of asynchronous
// operations once they are completed.

const fs = require('fs');
// Example of a callback function in Node.js
function person(name, callbackFn) {
  console.log(`Hello, ${name}!`);
  callbackFn();
}

function address() {
  console.log('You are at 123 Main Street.');
}

person('Dancan', address);

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});
