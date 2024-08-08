///Day 6:Arrays:-

//Tasks/Activities:-
//Activity One:-[Array creation and access]:-

//Task 1:- Create an array of numbers from 1 to 5 and log the array to the console:-
const arrOfNums = [1, 2, 3, 4, 5];
console.log(`Array of numbers :${arrOfNums}`);


//Task 2:- Access the first and last elements of the array to the console:-

const arrOfChars = ['A', 'B', 'C', 'D', 'E'];

console.log(`The first element of the 'arrOfChars' is ${arrOfChars[0]} character and the last element is ${arrOfChars[4]} character`)


//////////////////////////////////////////////////////////////////////////////////////////////////

//Activity Two:-[Array Methods (Basic)]:-
//Task 3:- Use the 'push' method to add a new number at the end of an array and log the updated array:-

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.push(9);
// console.log(`An updated array ${arr}`);
// [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]


//Task 4:- Use the 'pop' method to remove the last element from the array and log the updated array:-

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.pop();
console.log(`An updated array with pop ${arr}`);


//Task 5:- Use the 'shift' method to remove the first element from the array and log the updated array:-
arr.shift();
console.log(`An updated array with shift ${arr}`);

//Task 6:- Use the 'unshift' method to add a new number to the beginning of the array and log the updated array.
arr.unshift(1);
console.log(`An updated array with unshift ${arr}`);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Activity Three:-[Array Methods (Intermediate)]:-
//Task 7:- Use the 'map' method to create a new array where each number is doubled and log the new array.


//What is 'map' method or function in javascript?
//In javascript the 'map' method or function is a higher order function that is used to iterate over an array and perform some operations on each element of the array,it creates a new array by applying a function to each element of the array.
 
const array = [1, 2, 3, 4];
//Lets describe this array using 'map' method:-

const doubledArray = array.map((num)=> num * 2)

console.log(`Created a new array using 'map' method : ${doubledArray}.`);
//Created a new array using 'map' method : 2,4,6,8.


//Task 8:- Use the 'filter' method to create a new array with only even numbers and log the new array:-
//What is 'filter' method in javascript?
 // In javascript the 'filter' method or function is an another higher order function used to work with arrays.it creates a new array with all elements pass the test implemented by the provided callback function.

const evenNumbersArray = array.filter((num) => num % 2 === 0);
console.log(`Created a new array using 'filter' method : ${evenNumbersArray} which are even numbers.`);



//Task 9:- Use the 'Reduce' method to calculate the sum of all numbers in the array and log the result:-
//What is 'Reduce' method in javascript?
//In javascript the 'Reduce' method is an another higher order function that is used to iterate over an array and accumulate  a single value based on the elements of the array.it executes a reducer function on each element of the array and resulting a single output.
 //The reducer function is known as a callback function.


//Lets define the array with 'calculateNums' in the variable and use the reduce() method:-
//Create a reducer function that takes two parameters the accumulator and the current value.this function should return the accumulator.
//And it has an optional intialvalue

const calculateNums = array.reduce((acc, curr) => {
    return acc + curr
}, 0)
//acc: The accumulator, which starts at 0 (the initial value provided).
//curr: The current element of the array being processed.
//acc + curr: Adds the current element to the accumulator.
//0: The initial value of the accumulator.
console.log(`Created a new array using 'Reduce' method to calculate the sum of all numbers : ${calculateNums}`);
//Created a new array using 'Reduce' method to calculate the sum of all numbers : 10.


//////////////////////////////////////////////////////////////////////////////////////////////////


//Activity Four:-[Array Iteration]:-
//Task 10:- Use a 'for loop' to iterate over the array and log each element to the console:-


const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i <= arrayOfNumbers.length; i++){
    console.log(arrayOfNumbers[i]);
};

//Task 11:- Use the 'forEach' method to iterate over the array and log each element to the console:-

// const newArr = arrayOfNumbers.forEach((num) => console.log(num));
// console.log(newArr);

//'forEach' method does not return a new array.//It will logged an 'undefined'.


//What is forEach method :-
//The 'forEach' method in javascript is used to execute a provided function once for each array element.and it doesn't return a new array.
//instead it returns 'undefined'.
 
arrayOfNumbers.forEach((num) => console.log(num));



//////////////////////////////////////////////////////////////////////////////////////////

//Activity Five:-[Multi-dimensional Arrays]:-

//Task 12:- Create a 2-dimensional array (matrix) and log the entire array to the console:-


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    
];

// Log the entire array to the console
console.log(matrix);

//each representing a row in the 2-dimensional array.
matrix.forEach((row) => console.log(row))


//Task 13:- Access and log specific element  from the  two-dimensional array:-
console.log(matrix[0]);
console.log(matrix[1]);
console.log(matrix[2]);



//What is forEach() method in javascript?
//The forEach() method in javascript is used to execute a provided function once for each element in an array.and it does not returns a new array.
 
//Lets take an example:-

const arrOfNumsExample = [1, 2, 3, 4, 5, 6];

//Iterate over once for each element in an array:-

arrOfNumsExample.forEach((num) => {
    const modifiedNum = num + 2;
    
    console.log(`arrOfNumsExample with using forEach()-Method with original array:${num} & modified array:${modifiedNum}`);
  
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//What is map() method in javascript or describe it:-
//In javascript the map() method is a higher order function which is used to iterate over an array and perform some operations each element of the array.it creates a new array by applying a function to each element of the array.

//Wha are the benefits of map() method or  function?
//1.Map() returns a new array it does not modify the original array.
//2.it is more concise and readable code.
//3.Map returns a new array and it can be easily chained.

//Lets take an example:-

const arrOfNumsExampleTwo = [1, 2, 3, 4, 5];
console.log(`Original array:arrOfNumsExampleTwo ${arrOfNumsExampleTwo}`);

let modifiedArrMap = arrOfNumsExampleTwo.map((num) => num * 5);
console.log(`Modified array:arrOfNumsExampleTwo ${modifiedArrMap}`);


/////////////////////////////////////////////////
                
//What is filter() method in javascript?
//The filter() method in javascript is a higher order function is used to work with arrays,
//It creates a new array with all elements pass the test implemented by the provided callback function.
//It is used for condition, if the callback functions return true for an element.

//What are the benefits of a filter method?
//Filter() filter method does not modify the original array , it returns a new array.
//It is more concise and readable code.
//The callback function is applied to each element of the array.

//Lets take an example below:-


const arrOfNumsExampleThree = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Lets find out the odd numbers:-

let oddNums = arrOfNumsExampleThree.filter((num) => num % 2 === 1);

console.log(`Odd numbers : ${oddNums}`);//Odd numbers : 1,3,5,7,9.

/////////////////////////////////////////////

//What is a Reduce () method in javascript?
//The reduce() method is a higher order function that is used to iterate over an array and accumulate a single value based on the elements,and it executes a reducer function on each element of the array.
//It takes a callback function and an optional value as its arguments.

//What are the benefits of a Reduce() method?
//Reduce() method does not modify the original array.
//It has more concise and more readable code.
//Reduce() method returns a single value.


//lets take an example below:-

const arrOfNumsExampleFour = [10, 20, 30, 40, 50];

const modifiedArrReduce = arrOfNumsExampleFour.reduce((acc,curr) => {
   return acc + curr;
},0)


console.log(`modifiedArrReduce:${modifiedArrReduce}`); //150


//Chaining:-

let anArray = [1, 2, 3, 4, 5, 6];

let multiplyNums = anArray
    //Multiply with each num by 2.
    .map((num) => num * 2)
    //Keep only even numbers.
    .filter((num) => num % 2 === 0)
    //Sum up all the numbers.
    .reduce((acc, curr) =>  acc + curr,0)


console.log(multiplyNums); //42



