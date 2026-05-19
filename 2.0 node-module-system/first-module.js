function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Divide by zero is not allowed')
    }
    return a / b;   
}

//to export the functions, we can use module.exports. We can export them as an object, where the keys are the names of the functions and the values are the functions themselves.
module.exports = {
  add, subtract, divide
}