///.Feature Request [For practice purpose]:-

//1:Array manipulation script:-
//Write a script that demonstrates the creation of an array,adding and removing elements using , push(),pop(),shift() and unshift():-

const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
arrayOfNumbers.push(7);
console.log(`Push():${arrayOfNumbers}`);
arrayOfNumbers.pop();
console.log(`Pop():${arrayOfNumbers}`);
arrayOfNumbers.shift();
console.log(`Shift():${arrayOfNumbers}`);
arrayOfNumbers.unshift(1);
console.log(`Unshift():${arrayOfNumbers}`);


//2:Array Transformation script:-
//Create a script that uses map,filter and  reduce methods to transform and aggregate array data:-

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// Map method to create a new array with each element doubled.
const mapWithArray = array.map((num) => num * 2);
console.log(`Map() method to iterate over an array ${mapWithArray}`);

// Filter method to create a new array with even numbers only:-
const filterWithArray = array.filter((num) => num === 2 % 0);
console.log(`Filter() method used to work with the array with all elements pass the test implemented by the callback function (even numbers) ${filterWithArray}`);

// Reduce method to calculate the sum of all elements in the array:-
const reduceWithArray = array.reduce((acc, curr) => {
  return  acc + curr
}, 0)
console.log(`Reduce method to aggregate array data (sum of all elements): ${reduceWithArray}`);


//3:Array Iteration script:-
//Write a script that iterates over an array using both for loop and forEach method and logs each element:-

const newArr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i <= newArr.length; i++){
    console.log(newArr[i]);
};

newArr.forEach((num) => console.log(num));


//4:Two-dimensional Array script:-
//Create a script that demonstrates the creation and manipulation of a two dimensional array:-

const matrix = [
    ['A', 'B', 'C'],
   ['D', 'E', 'F'],
   ['G', 'H', 'I']
]

console.log(matrix);
// [ [ 'A', 'B', 'C' ], [ 'D', 'E', 'F' ], [ 'G', 'H', 'I' ] ]

//Using forEach method:-
//In javascript forEach method is used to execute a provided function once for each array element.

matrix.forEach((row) => console.log(row));
// [ 'A', 'B', 'C' ]
// [ 'D', 'E', 'F' ]
// [ 'G', 'H', 'I' ]