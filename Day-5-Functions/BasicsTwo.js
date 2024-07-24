///.Feature Request [For practice purpose]:-

//1:Even or Odd function script:-
//Write a function that includes a function to check if a number is even or odd and logs the result:-

function checkEvenOrOdd(num) {
 num % 2 === 0 ? console.log(`The num ${num} is an even number.`)  : console.log(`The num ${num} is an odd number.`)
}
checkEvenOrOdd(5)//The num 5 is an odd number.
 




//2:Square calculation function script:-
//Create a script  that includes a function to calculate the square of a number and returns the result:-

function calculateSquare(num) {
 return num * num;
};
let result = calculateSquare(5);
console.log(result); //25.




//3:Concatenation function script:-
//Write a script that includes a function expression to concatenate two strings and return the result:-

const concatenateStrings = function (str1,str2) {
    return str1 + str2;
}
let resultTwo = concatenateStrings("Hello", " World!");

console.log(resultTwo); //Hello World!




//4:Sum calculation arrow function script:-
//Create a script  that includes an arrow function to calculate the sum of two numbers and returns the result:-

const calculateSum = (num1, num2) => {
    return num1 + num2;
};

let resultThree = calculateSum(50, 20);

console.log(resultThree); //70


//5:Higher order function script:-
//Write a script  that includes a higher order function to apply a given function multiple times:-



//Example one:-
function CreateFuncMultipleTimes(func,times) {
    for (let i = 0; i < times; i++){

        func();
    }
};

const sayHelloWorld = () => console.log('Hello World!');

let resultFour = CreateFuncMultipleTimes(sayHelloWorld, 6);

console.log(resultFour);


//Example two:-

function createCalculations(func1,func2,value) {
    let resultOne = func1(value);
    let resultTwo = func2(resultOne);
    return resultTwo;
}

//Example functions:-

const addNum = (num) => num + 5;

const minusNum = (num) => num - 20;


const initialVal = 50;

let output = createCalculations(addNum, minusNum, initialVal)

console.log(output); //35.
