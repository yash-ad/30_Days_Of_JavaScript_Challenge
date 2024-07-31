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
//Extact those values and store into the variables:-
const { brand, model, year } = car;

console.log('Object destructuring of car object');
console.log(`Brand: ${brand}`);  // Tata
console.log(`Model: ${model}`);  // Harrier
console.log(`Price: ${year}`);  // 20000000

const { specifications: { color, power } } = car;

console.log(`Specifications of car is '${color}' color and '${power}' mode`);