///What is a module in javascript?
//In javascript module is a self-contained piece of code that can be imported and reused in other files.
//It helps to organize the code into smaller manageable units and making code easier to maintain and understand.





// 1. Exporting and Importing a Simple Function
// Problem:

// Create a JavaScript module file named mathOperations.js that contains the following functions:
//add(a, b): Returns the sum of a and b.
export function add(a, b) {
    return a + b;
}
//subtract(a, b): Returns the difference between a and b.
export function subtract(a, b) {
    return a - b;
}

//Multiply(x,y) : Returns tye difference between a and b.
export function multiply(x, y) {
    return x * y;
}