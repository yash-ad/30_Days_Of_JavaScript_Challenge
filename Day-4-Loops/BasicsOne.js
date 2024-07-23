////Loops:-

//Tasks/Activities:-

///Activity One:-[For Loop]:-

//Task 1: Write a program to print numbers from 1 to 10 using a for loop:-

for (let i = 1; i <= 10; i++){
    console.log(`Number:${i}`);
};

//Task 2: Write a program to print the multiplication table of 5 using a for loop:-

for (let i = 1; i <= 10; i++){
    console.log(`5 * ${i} = ${5 * i}`);
}


///Activity Two:-[While Loop]:-
//Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop:-

// let sum = 0;
// let i = 1;

// while (i <= 10) {
//     //  console.log(`i:${i}`);
//     sum += i;
//     // console.log(`Sum:${sum}`);
//     i++;
//     // console.log(`i:${i}`);
// }

// console.log(`The sum of numbers from 1 to 10 is ${sum}`); //55


//From 1 to 20:-

// let sum = 0;

// let i = 1;

// while ( i <= 20) {
//     sum += i; // sum = sum + i;
//     console.log(`Sum:${sum}`);
//     i++;
//         console.log(`i:${i}`);

// }

// console.log(`The sum of numbers are from 1 to 20 :${sum}`); //210




////Task 4: Write a program to print numbers from 10 to 1 using a while loop:-
let j = 10;

while (j >= 1) {
    console.log(j);
    j--;
}


//Activity Three:-[do-While Loop]:-
//Task 5: Write a program to print numbers from 1 to 5 using a do... while loop:_
let k = 1;

do {
    console.log(k);
    k++;
}
while(k <= 5)


//From1 to 10 print using a do...while loop

let l = 1;

do {
    console.log(l);
    l++;
}
while (l <= 10)
    

//Task 6: Write a program to calculate the factorial of a number using a do...while loop:-

//Suppose the number is 5;
// let number = 5;
// let factorial = 1;
// let i = number;

// do {
//     factorial *= i;
//     i--;
// } while (i > 0);

// console.log(`The factorial of ${number} is ${factorial}`);


//Lets suppose the number is 10 for factorial:-

let number = 10;

let factorial = 1;

let i = number;

do {
    factorial *= i;
    i--;
} while (i > 0)

console.log(`The factorial of ${number} is ${factorial}`);
//The factorial of 10 is 3628800.



//Activity Four:-[Nested Loops]:-
////Task 7: Write a program to print a pattern using nested for loops:-


// let rows = 5;

// //An outer loop:-
// for (let i = 1; i <= rows; i++){
//     let pattern = "";
//         // console.log(i);
//     //An inner loop:-
//     for (let j = 1; j <= i; j++){
//         // console.log(j);
//         pattern += "*"
//     }
//     console.log(pattern);
// }


//Nested Loop
// let rows = 10;

// //Outer loop:-
// for (let i = 1; i <= rows; i++){
//     let pattern = ""
//     //Inner loop:-
    
//     for (let j = 1; j <= i; j++)
// pattern += "*"
// console.log(pattern);
// }

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

////Task 7: Write a program to print a pattern using nested for loops:-


let rowsOfPattern = 5;

for (let i = 1; i <= rowsOfPattern; i++){
    let pattern = "";
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


//Activity Five:-[Loop control statements]:-
////Task 8: Write a program to print numbers from 1 to 10,but skip the number 5 using the continue statement:-
for (let i = 1; i <= 10; i++){
    if (i === 5) continue;
    console.log(i);
}


////Task 9: Write a program to print numbers from 1 to 10,but stop the loop when the number is 7 using the 'break'statement:-

for (let i = 1; i <= 10; i++){
    if (i === 7) break;
    console.log(i);
}