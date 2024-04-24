/* 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18. 
Enter your age: 30 
You are old enough to drive. 
Enter your age:15 
You are left with 3 years to drive. */

let age = prompt("Enter your age");

if (age >= 18) {
    console.log("You are old enough to drive")
}
else{
    let yearsLeft = 18 - age;
    alert("You are left with " + yearsLeft + " years to drive.")
}

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input. 
// Enter your age: 30 
// You are 5 years older than me. 

let myAge = 30;
let yourAge = prompt("Enter your age");

if (myAge > yourAge) {
    console.log("I am " + (myAge - yourAge) + " years older than you.");
}
else if (myAge > yourAge) {
    console.log("I am"+ (yourAge-myAge)+"years older than you");
}
else {
    console.log("We are of the same age");
}



//3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways 
// using if else 
// ternary operator. 
// let a = 4 
// let b = 3 
// 4 is greater than 3 

let a = 4;
let b = 3;
let result = (a >b)? "a is greater than b" : "a is less than b";
console.log(result);

/* 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? 
Enter a number: 2 
2 is an even number 
Enter a number: 9 
9 is is an odd number. 
 */

let num = prompt("Enter your number");

if(num % 2 === 0){
    console.log(num+ " is an even number");
}
else{
    console.log(num+ " is an odd number");
}

// Exercises: Level 2 
// 1. Write a code which can give grades to students according to theirs scores: 80-100, A 
// 70-89, B 
// 60-69, C 
// 50-59, D 
// 0-49, F 


let score = prompt("Enter your marks");

if( score >= 80 && score <= 100){
    console.log("A");
}else if(score >= 70 && score < 80) {
    console.log("B");
} else if (score >= 60 && score < 70) {
    console.log("C");
} else if (score >= 50 && score < 60) {
    console.log("D");
} else {
    console.log("F");
}

/*2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is : September, October or November, the season is Autumn. 
December, January or February, the season is Winter.
March, April or May, the season is Spring 
June, July or August, the season is Summer 
 */

let month = prompt("Enter your month1");
if(month1 === "September" || month === "October" || month === "November"){
    console.log("The season is Autumn");
} else if (month === "December" || month === "January" || month === "February") {
    console.log("The season is Winter.");
} else if (month === "March" || month === "April" || month === "May") {
    console.log("The season is Spring.");
} else if (month === "June" || month1 === "July" || month === "August") {
    console.log("The season is Summer.");
} else {
    console.log("Invalid month1.");
}

/* 3. Check if a day is weekend day or a working day. Your script will take day as an input. 
What is the day today? Saturday 
Saturday is a weekend. 
What is the day today? saturDaY 
Saturday is a weekend. 
*/

let day = prompt("Enter your day");
switch (day) {
    case "Saturday":
    case "Sunday":
        console.log(day + " is a weekend.");
        break;
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log(day + " is a working day.");
        break;
    default:
        console.log("Invalid day.");
}

// EXERCISE 3
// 1. Write a program which tells the number of days in a month1. 
// Enter a month1: January 
// January has 31 days. 
// Enter a month1: JANUARY 
// January has 31 day 
// Enter a month1: February 
// February has 28 days. 
// Enter a month1: FEbruary 
// February has 28 days. 

let month1 = prompt("Enter your month")

switch (month1) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
        console.log(month1 + " has 31 days.");
        break;
    case "April":
    case "June":
    case "September":
    case "November":
        console.log(month1 + " has 30 days.");
        break;
    case "February":
        console.log(month1 + " has 28 days.");
        break;
    default:
        console.log("Invalid month1.");
}

// 2. Write a program which tells the number of days in a month, now consider leap year. 

let month2 = prompt("Enter your month"); // replace this with the actual month
let year = prompt("Enter your year"); // replace this with the actual year

switch (month2) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
        console.log(month2 + " has 31 days.");
        break;
    case "April":
    case "June":
    case "September":
    case "November":
        console.log(month2 + " has 30 days.");
        break;
    case "February":
        if (year % 4 === 0 && (year % 100!== 0 || year % 400 === 0)) {
            console.log(month2 + " has 29 days in a leap year.");
        } else {
            console.log(month2 + " has 28 days.");
        }
        break;
    default:
        console.log("Invalid month.");
}