//event-emitter.js is used to create an event emitter object that can be used to emit and listen for events.
// It allows us to create custom events and handle them in a flexible way.
// The event emitter object provides methods for registering event listeners, emitting events, and removing listeners.

const EventEmitter = require('events');

const myFirstEmitter = new EventEmitter();

//register a listener for the 'greet' event
myFirstEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});
//emit the 'greet' event with a name/ call the greet event
myFirstEmitter.emit('greet', 'Dancan'); 

