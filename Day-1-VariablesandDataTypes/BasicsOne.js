///Activity One:-[Variable Declaration]

//Task 1:- Declare a variable using 'var',assign it a number and log the value to the console.
var numberValue = 5;
console.log (`The value of numberValue is : ${numberValue}`);


//Task 2:- Declare a variable using 'let', assign it a string, and log the value to the console.
let stringValue = "Yash";
console.log(`The value of stringValue is : ${stringValue}`);


///Activity Two:-[Constant Declaration]

//Task 3:- Declare a variable using 'const', assign it a boolean value, and log the value to the console.
const booleanValue = true;
console.log(`The value of booleanValue is : ${booleanValue}`);



///Activity Three:-[Data types]
//Task 4:- Create variables of different data types(number ,string , boolean , object , array) and log each variables type using the 'typeof' operator:-

let numValue = 10;
console.log(`Type of numValue is : ${ typeof numValue}`);

let stringVal = "string";
console.log(`Type of stringVal is : ${ typeof stringVal}`);

let booleanVal = false;
console.log(`Type of booleanVal is : ${typeof booleanVal}`);

let objectVal = {key : "value"};
console.log(`Type of objectVal is : ${typeof objectVal}`);

const arrayVal = [1,2,3,4,5,6];
console.log(`Type of arrayVal is : ${typeof arrayVal}`);

///Activity Four:-[Reassigning Variables]
//Task 5:- Declare a variable using 'let',assign it an initial value,reassign new value,and log both values to the console.

let initialVal = 10;
console.log(`The Initial value is ${initialVal}`);
 reAssignVal = 100;
console.log(`The Reassign value is ${reAssignVal}`);

//With using 'let' keyword we can reassign  a new value to the variable declared with let at anytime however we can cannot redeclared a variable with 'let' in same scope , it will throw a syntax error.



///Activity Five:-[Understanding Const]
//Task 6:- Try reassigning a variable declared with 'const' and observe the error:-

const myName = "Yash";

// myName = "Yash Dandnaik";
// console.log(myName);
//We cannot reassign a variable with Constant , because it will throw a TypeError :- Assigment to a constant variable.

console.log(myName); //Yash








