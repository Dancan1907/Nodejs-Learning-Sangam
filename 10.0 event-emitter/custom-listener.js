//
const EventEmitter = require("events");

class MyCustomEmitter extends EventEmitter {
    constructor() {
        super();
        this.greetingPrefix = "Hello";
    }
    greet(name) {
        this.emit('greeting', `${this.greet}, ${name}!`);
    }
}
const myCustomEmitter = new MyCustomEmitter();
myCustomEmitter.on('greeting', (message) => {
    console.log(message);
});
myCustomEmitter.greet('Dancan');