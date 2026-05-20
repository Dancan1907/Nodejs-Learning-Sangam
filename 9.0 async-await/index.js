//Used in place of promises, async/await allows us to write asynchronous code in a more synchronous manner.
//  It is built on top of promises and provides a cleaner syntax for handling asynchronous operations.
// The async keyword is used to declare a function as asynchronous, and the await keyword is used to 
// pause the execution of the function until a promise is resolved or rejected. This allows us 
// to write code that looks more like traditional synchronous code, while still being non-blocking and efficient.

function delayFn(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Waited for ${time} milliseconds`);
        }, time);
    });
}

async function delayedGreeting(name) {
    await delayFn(2000); // Wait for 2 seconds
    console.log(`Hello, ${name}!`);
    
}
delayedGreeting('Dancan');

async function division(num1, num2) {
    try { 
        if (num2 === 0) {
            throw new Error('Cannot divide by zero');
        }
        return num1 / num2;

    } catch (error) {
        console.error('Error:', error);
        return 'An error occurred during division.';
    }
} 

async function performDivision() {
    const result = await division(10, 0);
    console.log('Division Result:', result);
}