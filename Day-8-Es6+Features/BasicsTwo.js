///.Feature Request [For practice purpose]:-

//1:Template literals Script:-
//Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multiline strings:-

const variableOne = "Baa baa"

const variableTwo = "black sheep";

const multiLineStrings = `${variableOne},${variableTwo} have you any wool?
Yes, sir, yes, sir, three bags full
One for the master, one for the dame
One for the little boy who lives down the lane
${variableOne}, ${variableTwo}, have you any wool?
Yes, sir, yes, sir, three bags full`;

console.log(multiLineStrings);

// Baa baa,black sheep have you any wool?
// Yes, sir, yes, sir, three bags full
// One for the master, one for the dame
// One for the little boy who lives down the lane
// Baa baa, black sheep, have you any wool?
// Yes, sir, yes, sir, three bags full



//2:Destructuring script:-
//Create a script that uses array and object destructuring to extract values and log them to the console:-


///.Array:-

//Array of numbers:-
const arrOfNums = [1, 2, 3, 4, 5, 6];

//Array destructuring:-
//Extact those values and store into the variables:-
const [firstElement, secondElement, thirdElement] = arrOfNums;


console.log('Array destructuring of array of numbers');
console.log(`The first element of an array is ${firstElement}`);
console.log(`The second element of an array is ${secondElement}`);
console.log(`The third element of an array is ${thirdElement}`);



///.Object:-

//An object of car details:-
const car = {
    brand: "Tata",
    model: "Safari",
    year: 2024,
    specifications: {
        color: "White",
        power: "Automatic"
    }
};

//Object destructuring:-
//Extract those values and store into the variables:-
const { brand, model, year } = car;

console.log('Object destructuring of car object');
console.log(`Brand: ${brand}`);  // Tata
console.log(`Model: ${model}`);  // Harrier
console.log(`Price: ${year}`);  // 20000000

const { specifications: { color, power } } = car;

console.log(`Specifications of car is '${color}' color and '${power}' mode`);


//3:Spread and Rest operators script:-
//Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments:-


//Spread operator:-
const arrOne = ['A', 'B', 'C', 'D'];

const arrTwo = ['E', 'F', 'G', 'H'];

const combineArrays = [...arrOne, arrTwo, 'I', 'J', 'K'];

console.log(`Combined array using spread operator:[${combineArrays}]`);


//Rest parameter to handle multiple function arguments:-


function calculateSum(...nums) {
    return nums.reduce((acc,curr)=> acc + curr , 0)
};

//To handle multiple function arguments:-
const result = calculateSum(4, 6, 7, 9, 1, 5, 8);

console.log(`The sum of all numbers: ${result}`); //40



//4:Default parameters script:-
//Create a script that defines a function with default parameters and log the results of calling it with different arguments:-


//Function with default parameters:-
function subtractNums(x,y=5) {
    return x - y;
};


//Calling the function with both parameters provided:-
const resultOne = subtractNums(50, 30);
console.log(`The resultOne output is : ${resultOne}`);//20
//Calling the function with only one parameter,using the default value for y:-
const resultTwo = subtractNums(80);
console.log(`The resultTwo output is : ${resultTwo}`);//75



//5:Enhanced object literals script:-
//Write a script that uses enhanced object literals to create and log an object with methods and computed property names:-


//Lets create an object called 'bikeObj' with constant:-

//Declared with variables and their values:-
const bikeBrand = "TVS";
const bikeModel = "Apache";
const bikeYear = 2006;

const bikeObj = {
    //Computed property names:-
    [bikeBrand]: bikeBrand,
    [bikeModel]: bikeModel,
    [bikeYear]: bikeYear,
    //Method:-
    detailsInfo() {
        return `The bikeObject represents the bike details :Brand-'${this[bikeBrand]}',Model-'${this[bikeModel]}',Year-'${this[bikeYear]}'`
    }
};

console.log('Bike object :', bikeObj);

console.log(bikeObj.detailsInfo());