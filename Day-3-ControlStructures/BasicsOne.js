////Control statements:-

//Tasks/Activities:-

///Activity One:-[If-else-statements]:-

//Task 1:- Write a program to check if a number is positive , negative or zero and log the result to the console:-

//Normal statement using if-else conditions
let num = -1;

if (num > 0) {
       console.log(`${num} is Positive number.`);
} else if (num < 0) {
       console.log(`${num} is Negative number.`);
}
else {
      console.log(`${num} is Zero.`); 
}

//Similar program with using Function:-
function checkNum(num) {
    if (num > 0) console.log(`${num} is Positive .`)
    else if (num < 0) console.log(`${num} is Negative.`)
    else  console.log(`${num} is Zero.`); 
    
}
console.table(checkNum(1),checkNum(-2),checkNum(0));



//Task 2:- Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console:-
let age = 17;

if ( age >= 18) console.log(`Age ${age} group category is eligible for voting as per the policy. `);

else console.log(`Age below 18 group category is not eligible for voting as per the policy`);


///Activity Two:-[Nested If-else-statements]:-
//Task 3:- Write a program to find the largest of three numbers using nested-if-else statements:-

let numOne = 15;

let numTwo = 10;

let numThree = 5;


if (numOne >= numTwo) {
    if (numOne >= numThree) {
       console.log(`The largest number is ${numOne}`); 
    }
    else {
            console.log(`# The largest number is ${numThree}`);    
    }
}
else {
    if (numTwo >= numThree) {
               console.log(`The largest number is ${numTwo}`);
    }
    else {
          console.log(`* The largest number is ${numThree}`); 
    }
}

///Activity Three:- [Switch case]
//Task 4:- Write a program that uses a switch case to determine the day of the week based on Number (1-7) and log the name to the console.

let dayNumberOFWeek = 1;

switch (dayNumberOFWeek) {
        case 1:
        console.log(`Day 1 is for Monday`);
        break;
    
      case 2:
        console.log(`Day 2 is for Tuesday`);
        break;
    
      case 3:
        console.log(`Day 3 is for Wednesday`);
        break;
    
     case 4:
        console.log(`Day 4 is for Thursday`);
        break;
    
    case 5:
        console.log(`Day 5 is for Friday`);
        break;
    
      case 6:
        console.log(`Day 6 is for Saturday`);
        break;
    
       case 7:
        console.log(`Day 7 is for Sunday`);
        break;
    
    default: console.log(`${dayNumberOFWeek} is an Invalid Number not present in the 1-7 number.`);
        
}

//Task 5:- Write a program that uses a switch case to assign a grade(A,B,C,D,E,) based on a score and log the grade to the console.

let score = 50;

let grade;

switch (true) {
    case (score >= 90 && score <= 100):
        grade = 'A';
        console.log(`Student's grade is ${grade} and the score is Achieved ${score}`);
        break;
    
     case (score >= 80 && score < 90):
        grade = 'B';
        console.log(`Student's grade is ${grade} and the score is Achieved ${score}`);
        break;
    
     case (score >= 70 && score < 80):
        grade = 'C';
        console.log(`Student's grade is ${grade} and the score is Achieved ${score}`);
        break;
    
       case (score >= 60 && score < 70):
        grade = 'D';
        console.log(`Student's grade is ${grade} and the score is Achieved ${score}`);
        break;
    
     case (score >= 0 && score < 60):
        grade = 'E';
        console.log(`Student's grade is ${grade} and the score is Achieved ${score} Must need for improvement.`);
        break;
    
}

///Activity Four:- [Conditional (Ternary operator)]
//Task 4:- Write a program that uses the ternary operator to check if a  number is even or odd and log the result to the console:-


// let number = 4; //Even num
let number = 5; //Odd num

let result = (number % 2 === 0) ? `The given number ${number} is even number.` : `The given number ${number} is odd number.`;
console.log(result);

//What is an Even number :-
//In mathematics the number is divisible by 2 and the remainder is 0, then it is an even number.


//What is an Odd number:-
//In mathematics the number is not divisible by 2 and the remainder is 1, then it is an odd number.


//Activity Five: [Combining Conditions]
//Task 4:- Write a program to check if a year is leap year using multiple conditions ( divisble by 4 , but not 100 unless also divisible by 400) and also log the result to the console.


//What is a leap year:-
//A leap year means a year that has a one extra day added to it, making 366 days usually its 365 days:-\

//Lets findout:-
// let year = 2024;

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//   console.log(`Given ${year} is a leap year.`);
// } else {
//     console.log(`Given ${year} is not a leap year.`);
// }


let year = 2025;

//Lets findout the given 2025 year is a leap year or not:-

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(`The given year:${year} is a leap year`);
}
else {
   console.log(`The given year: ${year} is not a leap year`); 
}



