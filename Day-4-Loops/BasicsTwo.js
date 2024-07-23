///.Feature Request [For practice purpose]


//1:Number Printing script:-
//Write a script that prints numbers from 1 to 10 using a for loop and a while loop:-

//Using for loop:-
for (let i = 1; i <= 10; i++){
    console.log(i);
}

console.log("***************************");
//Using while loop:-

// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }



//2:Multiplication table script:-
//Create a script that prints the multiplication table of 5 using a for loop:-

for (let i = 1; i <= 10; i++){
    console.log(`5 * ${i} = ${5 * i}`);
}

// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15
// 5 * 4 = 20
// 5 * 5 = 25
// 5 * 6 = 30
// 5 * 7 = 35
// 5 * 8 = 40
// 5 * 9 = 45
// 5 * 10 = 50


//3:Pattern printing script:-
//Create a script that prints a pattern if stars using nested loops:-


//Suppose the stars rows are 10
let rows = 10;

//Outer loop:-
for (let i = 1; i <= 10; i++){
    let pattern = "";
    //Inner loop:-
    for (let j = 1; j <= i; j++){
        pattern += "*"
        
    }
    console.log(pattern);

}

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********


//4:Sum calculation script:-
//Write a script that calculates the sum of numbers from 1 to 10 using a while loop:-

let sum = 0;

let num = 1;

while (num <= 10) {
    sum += num;
    num++;
}

console.log(`The sum of 1 to 10 is:${sum}`);
// The sum of 1 to 10 is:55.




//4:Factorial calculation script:-
//Create a script that calculates the factorial of a number using a do...while loop:-

// let number = 5;

// let factorial = 1;

// let i = number;


// do {
//     factorial *= i;
//     i--;
// } while (i > 0)

// console.log(`The factorial of number ${number} is ${factorial}`);
// The factorial of number 5 is 120






let number = 10;


let factorial = 1;

let i = number;


do {
    factorial *= i;
    i--;
} while (i > 0)
    
    
console.log(`The factorial of number ${number} is ${factorial}`);
//The factorial of number 10 is 3628800
