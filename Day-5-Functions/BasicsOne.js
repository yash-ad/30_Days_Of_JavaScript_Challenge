////Functions:-

//Tasks/Activities:-

///Activity One:-[Function declaration]:-

//Task 1: Write a function to check if a number is even or odd and log the result to the console:-

function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        console.log(`The given number ${num} is even number.`)
    }
    else {
        console.log(`The given number ${num} is odd number.`)
        
    }
}
// checkEvenOrOdd(2);
// checkEvenOrOdd(3) ;
// checkEvenOrOdd(5)


//Task 2: Write a function to calculate the square of a number and return the result:-

function calculateSquare(num) {
   return num * num 
}

let result = calculateSquare(4);
console.log(result);


///Activity Two:-[Function expression]:-
//Task 3: Write a function expression to find the maximum of two numbers and log the result to the console:-

//Lets define a function called 'findMax' with function expression:-

const findMax = function (a, b) {
    //The function returns the greater of the two numbers using a ternary operator.
    //if 'a' is greater than 'b' it returns 'a' otherwise it returns 'b'
    return a > b ? a : b
};
//calling the function findMax() and the result stored into the variable called 'maxNumber'.
let maxNumber = findMax(5, 10);

console.log(maxNumber);


//Task 4: Write a function expression to concatenate two strings and return the result:-

//Lets define a function called 'concatenateStrings' because this is a function expression so here im gonna store into the variable with declaring any keyword let or const:_

const concatenateStrings = function (str1,str2) {
    return str1 + str2;
}

let output = concatenateStrings('Yash ', 'Dandnaik');
console.log(output);//Yash Dandnaik.


///Activity Three:-[Arrow function]:-

//Task 5: Write an arrow function to calculate the sum of two numbers and return the result:-

const calculateSum = (num1, num2) => {
    return num1 + num2;
};

// let logResult = calculateSum(10, 15);
// console.log(logResult); //25.




//Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value:_

const checkSpecificChar = (str,char) => {
    return str.includes(char);
}

let logResult = checkSpecificChar("JavaScript", "S");

// const checkSpecificChar = (str,char) => {
//     return str.includes(char)
// }
// let logResult = checkSpecificChar("visualStudio","t");

console.log(logResult); //true.






///Activity Four:-[Function parameters and default values]:-

//Task 7: Write a function that takes two parameters and returns their product
//provide a default value for the second parameter: -

function add(x, y = 20) {
    return x + y;
};
let resultOne = add(10, 50);
console.log(resultOne); //60

let resultTwo = add(60);
console.log(resultTwo);//80


function multiplyNums(num1, num2 = 5) {
    return num1 * num2
};
let resultThree = multiplyNums(50, 50);
console.log(resultThree); //2500.

let resultFour = multiplyNums(8);
console.log(resultFour);//40


//Task 8: Write a function that takes a person's name and age and returns a greeting message.provide a default value for the age:-

function personDetails(name,age=18) {
    return `Hello ${name}, Welcome to the 'E-Seva' by Government Of India and your age is ${age}.`
};

let outputOne = personDetails("Yash", 26);
console.log(outputOne);
// Hello Yash, Welcome to the 'E-Seva' by Government Of India and your age is 26.

let outputTwo = personDetails("Raghu");
console.log(outputTwo);
// Hello Raghu, Welcome to the 'E-Seva' by Government Of India and your age is 18.




///Activity Five:-[Higher-order functions]:-


//What is a higher-order function?
//A higher-order function is a function that takes one or more functions as arguments or returns a function as its result.

 
//Task 9: Write a higher-order function that takes a function and a number and calls the function that many times:-

// function repeatFunction(func,times) {
//     for (let i = 0; i < times; i++){
//         func()
//     }
// }


// const sayHello = () => console.log("Hello");

// repeatFunction(sayHello, 5);


function repeatFunction(func,times) {
    for (let i = 0; i < times; i++){
        func();
    }
}

const sayHello = () => console.log('Hello');

repeatFunction(sayHello, 3);


//Another example:-

const callBackFunction = () => {
    console.log("Hello World!");
};


function printFunction(func) {
    console.log("Im a higher order function");
    func();
}

printFunction(callBackFunction)

//Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value and then applies the second function to the result:-

// function applyFunctions(func1, func2, value) {
//     const resultOne = func1(value);
//     const resultTwo = func2(resultOne);
//     return resultTwo;
// };

// //Example functions:-
// const addFive = (num) => num + 5;
// const multiplyByThree = (num) => num * 3;

// //Example usage:-
// const initialValue = 20;
// const finalResult = applyFunctions(addFive, multiplyByThree, initialValue);
// console.log(finalResult);//75

//Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value and then applies the second function to the result:-



function applyFunctions(func1, func2, value) {
    const resultOne = func1(value);
    const resultTwo = func2(resultOne);
    return resultTwo;
}

//Functions examples:-

const addNum = (num) => num + 10;

const multiplyNum = (num) => num * 5;

//Example usage:-

const initialVal = 50;
const resultFunc = applyFunctions(addNum, multiplyNum, initialVal);

console.log(resultFunc);//300