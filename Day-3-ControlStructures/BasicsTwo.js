//Feature Request:-

//1:Number Check script:-
//Write a script to check if a number is positive , negative or zero and log the result to the console:-

let num = -15;

if (num > 0) console.log(`The given ${num} is a positive number`);
else if (num < 0) console.log(`The given ${num} is a negative number`);
else console.log(`The given ${num} is a zero`);


//2:Voting eligibility script:-
//Create a script to check if a person is eligible to vote based on their age and log the result:-

let age = 10;

if(age >= 18) console.log(`The age ${age},provided for the candidate is eligible for donating the vote policy..`);

else console.log(`The age ${age} provided for the candidate is not eligible for donating the vote policy`);


//3:Day of the week script:-
//Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name:-


let dayNumberOfWeek = 7;

switch (dayNumberOfWeek) {
    
        case 1: 'Monday';
        console.log(`Day ${dayNumberOfWeek} of the week is Monday`);
        break;  
        case 2: 'Tuesday';
        console.log(`Day ${dayNumberOfWeek} of the week is Tuesday`);
        break;
        case 3: 'Wednesday';
        console.log(`Day ${dayNumberOfWeek} of the week is Wednesday`);
        break;
        case 4: 'Thursday';
        console.log(`Day ${dayNumberOfWeek} of the week is Thursday`);
        break;
        case 5: 'Friday';
        console.log(`Day ${dayNumberOfWeek} of the week is Friday`);
        break;
        case 6: 'Saturday';
        console.log(`Day ${dayNumberOfWeek} of the week is Saturday`);
        break;
       case 7: 'Sunday';
        console.log(`Day ${dayNumberOfWeek} of the week is Sunday`);
        break;

    default : console.log('Invalid Day');
}



//4:Grade Assignment script:-
//Create a script that uses a switch case to assign a grade based on score and logs the grade:-
//('A','B','C','D','E'):- Grades


let score = 98;
let grade;

switch (true) {
    case (score >= 90 && score <= 100):
        grade = "A"
        console.log(`The student's acheived score is [${score}] and the grade is '${grade}' Excellent`);
        break;
    case (score >= 80 && score < 90):
        grade = "B"
               console.log(`The student's acheived score is [${score}] and the grade is '${grade}' Good`);
        break;
    case (score >= 70 && score < 80):
        grade = "C"
        console.log(`The student's acheived score is [${score}] and the grade is '${grade}' Much better`);
        break;
    case (score >= 60 && score < 70):
        grade = "D"
        console.log(`The student's acheived score is [${score}] and the grade is '${grade}' Prepare More`);
        break;
    case (score >= 0 && score < 50):
        grade = "E"
        console.log(`The student's acheived score is [${score}] and the grade is '${grade}' must be need for an improvement`);
        break;
}


//4:Leap year check script:-
// Write a script that checks if a year is leap year using multiple conditions and also log the result to the console.

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`The given year [${year}] is a leap year`);
}
else {
      console.log(`The given year [${year}] is not a leap year`);  
}