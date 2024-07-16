//1.Write a Script that declares variables of different data types and logs the both value and type of each variable to the console:-

let numValue = 10;
console.log(`The value of numValue ${numValue} and Type of numValue is : ${ typeof numValue}`);

let stringVal = "string";
console.log(`The value of numValue ${stringVal} and Type of numValue is : ${ typeof stringVal}`);

let booleanVal = false;
console.log(`The value of numValue ${booleanVal} and Type of numValue is : ${ typeof booleanVal}`);

let objectVal = {key : "value"};
console.log(`The value of numValue ${objectVal} and Type of numValue is : ${ typeof objectVal}`);

const arrayVal = [1,2,3,4,5,6];
console.log(`The value of numValue ${arrayVal} and Type of numValue is : ${ typeof arrayVal}`);


//2.reassignment a demo :
// Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
let numOne = 1;
// let numOne = 10;
// We cannot redeclare a variable with 'let' keyword within same scope , it will throw a syntax error.
numOne = 10;
//Although we can Reassign any value to variable with 'let' keyword in anytime.


const numTwo = 20;
// const numTwo = 200;
//// Similarly We cannot redeclare a variable with 'const' keyword within same scope , it will throw a syntax error.
console.log(numTwo);

// numTwo = 200;
// console.log(numTwo);
//You cannot reassign a new value to a variable declared with const. This will throw a TypeError.