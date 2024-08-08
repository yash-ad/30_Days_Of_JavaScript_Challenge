//Day 7:Objects:-

//Tasks/Activities:-
//Activity One:-[Template literals]:-

//Task 1:-Use template literals to create a string that includes variables for a person's name and age and log the string to the console:-
let myName = "Yash";

let myAge = 26;


let greetPerson = `Hello my name is ${myName} and I'm ${myAge} years old.`;

console.log(greetPerson);

//Task 2:-Create a multi-line string using template literals and log it to the console:-

let multiLineString =
    `
This is a string
that spans multiple
lines using template literals.
    `;

console.log(multiLineString);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Activity Two:-[Destructuring]:-
//Task 3:Use array destructuring to extract the first and second elements from an array of numbers and log them to the console:-

//So in this given array, here  we are declaring a variable called 'arrOfNums' with constant.
const arrOfNums = [1, 2, 3, 4, 5, 6];

console.log(`An array of numbers ${arrOfNums}`);

//Array destructuring to extract the first and second element:-
const [first, second] = arrOfNums;

//Log the extracted elements to the console:-
console.log(`The first element is ${first}`); //1
console.log(`The second element is ${second}`);//2


//Task 4:Use object destructuring to extract the title and author from a book object and log them to the console:-

const PhylosophyBook = {
    'title': 'The way of superior man',
    'author': 'David deida'
};

console.log(`Phylosophy Book: ${PhylosophyBook}`);

//Object destructuring to extract the title and author from a book object:-
const { title, author } = PhylosophyBook;

//Extract those variables from an object destructuring:-

console.log(`The phylosophy book title is : ${PhylosophyBook.title}`);

console.log(`The phylosophy book author is : ${PhylosophyBook.author}`);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Activity Three:-[Spread and Rest operators]:-
//Task 5:Use the spread operator that creates a new array that includes all elements of an existing array plus additional elements and log the new array to the console:-

const arrOne = [1, 2, 3];

const arrTwo = [4, 5, 6];

//Using spread operator:-
//What is spread operator:-
//Spread operator was introduced in ES6 version of javascript (2015).
//Spread operator is used to spreading an array and object literals, the spread operator is used in function calls.
const combineArrs = [...arrOne, ...arrTwo, 7, 8, 9];

//Log the new array to the console:-
console.log(`Combined Array using spread operator: ${combineArrs}`);
//Combined Array using spread operator: 1,2,3,4,5,6,7,8,9.



//Task 6:Use the rest operator in a function to accept an arbitary number of arguments,sum them and return the result:-

//What is Rest parameter?
 //Rest parameter was introduced in ES6 version of javascript.
//It provides an improved way of handling the parameter of a function.
//It can take a variable number of arguments and converted into an array.
//It is used in function declaration.
 

//Function using the rest operator to accept an arbitrary number of arguments:-
//Here it takes a varible called 'nums' as a parameter for a function using 'rest parameter':-
function addNums(...nums) {
    //Sum the arguments using the 'reduce()' method for calculating nums:-
    const sum = nums.reduce((total, num) => total + num, 0);

    return sum;
    
}


const result = addNums(1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log(`The sum of the numbers is : ${result}`);
// The sum of the numbers is : 45.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Activity four:[default parameters]:-
//Task 7:Write a function that takes two parameters and returns their product,with the second parameter having default value of 1.
//Log the result of calling the function with and without the second parameter:-


//Function that takes two parameters and return their product,
//With second parameter having the default value of 1.
function multiply(a, b = 1) {
    return a * b; 
};

//Log the result with calling function:-

const resultOne = multiply(5, 2);
console.log(`The given multiply of resultOne is : ${resultOne}`);//10

const resultTwo = multiply(8);
console.log(`The given multiply of resultTwo is : ${resultTwo}`);//8


////////////////////////////////////////////////////////////////////////////////////////////////////

//Activity five :[Enhanced object literals]:-
//Task 8:Use enhanced object literals to create an object with methods and properties and log the object to the console:-

//properties and methods:-
const name = "Samsung Galaxy 1050";
const price = 70000;

const product = {
    //property shorthand:-
    name,
    price,
    //method shorthand:-
    displayInfo() {
        return `The product is '${this.name}' and its price is Rs:${this.price}`
    }
};
console.log(`The product object ${product}`);

console.log(product.displayInfo());


//task 9: create an object with computed property names based on variables and log the object to the console:-

const carBrand = "Tata"
const carName = "Harrier";
const carPrice = 20000000;

//create an object with computed property names based on variables :-
const carObj = {
    //computed property names:-
    [carBrand]:carBrand,
    [carName]:carName,
    [carPrice]:carPrice,
    detailsInfo() {
    return `The details of the car is ${this[carBrand]} ${this[carName]} and price is ${this[carPrice]} lakhs.`
    }
};

console.log('The car object :',carObj);


console.log(carObj.detailsInfo());
//The details of the car is Tata Harrier and price is 20000000.
