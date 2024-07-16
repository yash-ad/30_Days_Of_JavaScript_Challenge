//Tasks/Activities:-


///Activity One:-[Arithmetic Operations]

//Task 1:- Write a program to add two numbers and log the result to the console.

let a = 1;
let b = 2;
let result = a + b;
console.log(`The sum of two numbers is ${result}`);//3

//Task 2:- Write a program to subtract two numbers and log the result to the console.

let c = 5;
let d = 3;
let output = c - d;
console.log(`The subtract of two numbers is ${result}`);//3

//Task 3:- Write a program to multiply two numbers and log the result to the console.

let e = 4;
let f = 5;
let outputResult = e * f;
console.log(`The Multiply of two numbers is ${outputResult}`);

//Task 4:- Write a program to Divide two numbers and log the result to the console.

let g = 5;
let h = 3;
let givenResult = g / h;
console.log(`The Dividation of two numbers is ${givenResult}`);


//Task 5:- Write a program to find the remainder when number is divided by another and log the result to the console.

let i = 50;
let j = 100;
let belowResult = i % j;
console.log(`The  remainder of two numbers is ${belowResult}`);



///Activity Two:-[Assignment  Operators]
//Task 6:- Use the '+=' operator to add a number to a variable and log the result to the console.

let addNum = 1;
addNum += 2;
console.log(addNum); //3


//Task 7:- Use the '-=' operator to subtract a number from a variable and log the result to the console.

let minusNum = 5;
minusNum -= 4;
console.log(minusNum); //1



///Activity Three:-[Comparison  Operators]
//Task 8:- Write a program to compare two numbers using > and < and log the result to the console.


let numOne = 1;
let numTwo = 2;
if (numOne > numTwo) {
    console.log("The statement is  false, 1 is not greater than 2");
} else if (numOne < numTwo){
    console.log("The statement is true, 1 is lesser than 2");
}

//Task 9:- Write a program to compare two numbers using >= and <= and log the result to the console.


let numThree = 4;
let numFour = 4;

if(numThree >= numFour)    console.log("The statement is true, numThree is greater than or equal to numFour");

if (numThree <= numFour) console.log("The statement is true, numThree is less than or equal to numFour");



//Task 10 :- Write a program to compare two numbers using == and === and log the result to the console.


let compareNumOne = 5;
let compareNumTwo = '5';

if (compareNumOne == compareNumTwo)   console.log('The statement is true, because they have an equal value. The equality operator (==) checks only for value, not the type.');

if (compareNumOne === compareNumTwo) {
    console.log('The statement is true, because they have both equal value and type. The strict equality operator (===) checks for both value and type.');
}
else {
    console.log('The statement is false, because they do not have equal value and/or type. The strict equality operator (===) checks for both value and type, and only executes when both are the same.');
}



///Activity Four:-[Logical Operators]
//Task 11:- Write a program that uses the && operator to combine two conditions and log the result to the console.

if (true && true) console.log(" Using && operator ,Ofcourse! It results to True.");

//Task 12:- Write a program that uses the || operator to combine two conditions and log the result to the console.
if (true || false) console.log("Using || operator ,It would be false.");


//Task 13:- Write a program that uses the ! operator to negate a condition and log the result to the console.
if (!true) {
console.log("This block will not execute because !true is false")
} else {
    console.log("Using the logical NOT operator means it converts to the opposite. Here the example is !true, which means this is false");
}

///Activity Five:-[Ternary Operator]
//Task 14:- Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let checkNumOne = +1;

let checkNumTwo = -2;


let resultOne = checkNumOne >= 0 ? "Positive Num" : "Negative Num";
console.log(resultOne);

let resultTwo = checkNumTwo >= 0 ? "Positive Num" : "Negative Num"
console.log(resultTwo);


