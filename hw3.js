/*1. Declare firstName, lastName, country, city, age, isMarried, year variable and
assign value to it and use the typeof operator to check different data types.*/

// let firstName = "Amar";
// let lastName = "Dsuza";
// let country = "India";
// let city = "Bhopal";
// let age = 22;
// let isMarried = true;
// let year = 2002;

// console.log(typeof(firstName));
// console.log(typeof(lastName));
// console.log(typeof(country));
// console.log(typeof(city));
// console.log(typeof(age));
// console.log(typeof(isMarried));
// console.log(typeof(year));


/* 2. Check if type of '10' is equal to 10 */
//console.log(typeof('10')===typeof(10));


/* 3. Check if parseInt('9.8') is equal to 10 */
//console.log(parseInt(9.8)===10)


/*4. Boolean value is either true or false.
1. Write three JavaScript statement which provide truthy value.
2. Write three JavaScript statement which provide falsy value.*/

//truthy values
// console.log(Boolean(6));
// console.log(Boolean('Saras'));
// console.log(Boolean(isMarried));

//falsy values
// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));


/*5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log() 
1. 4 > 3 
2. 4 >= 3 
3. 4 < 3 
4. 4 <= 3 
5. 4 == 4 
6. 4 === 4 
7. 4 != 4 
8. 4 !== 4 
9. 4 != '4' 
10. 4 == '4' 
11. 4 === '4' 
12. Find the length of python and jargon and make a falsy comparison statement.  */


// console.log(4 > 3); // true
// console.log(4 >= 3); // true
// console.log(4 < 3); // false
// console.log(4 <= 3); // false
// console.log(4 == 4); // true
// console.log(4 === 4); // true
// console.log(4 != 4); // false
// console.log(4 !== 4); // false
// console.log(4 != '4'); // false
// console.log(4 == '4'); // true
// console.log(4 === '4'); // false
// console.log("python".length <= "jargon".length); // false



/**6. Figure out the result of the following expressions first without using
console.log(). After you decide the result confirm it by using console.log()
1. 4 > 3 && 10 < 12
2. 4 > 3 && 10 > 12
3. 4 > 3 || 10 < 12
4. 4 > 3 || 10 > 12
5. !(4 > 3)
6. !(4 < 3)
7. !(false)
8. !(4 > 3 && 10 < 12)
9. !(4 > 3 && 10 > 12)
10. !(4 === '4')
11. There is no 'on' in both dragon and python */

// console.log(4 > 3 && 10 < 12); // true
// console.log(4 > 3 && 10 > 12); // false
// console.log(4 > 3 || 10 < 12); // true
// console.log(4 > 3 || 10 > 12); // true
// console.log(!(4 > 3)); // false
// console.log(!(4 < 3)); // true
// console.log(!(false)); // true
// console.log(!(4 > 3 && 10 < 12)); // false
// console.log(!(4 > 3 && 10 > 12)); // true
// console.log(!(4 === '4')); // true
// console.log(!('dragon'.includes('on') && 'python'.includes('on'))); // false






/*7. Use the Date object to do the following activities 
1. What is the year today? 
2. What is the month today as a number? 
3. What is the date today? 
4. What is the day today as a number? 
5. What is the hours now? 
6. What is the minutes now?  */


// let currentDate = new Date();
// let year = currentDate.getFullYear();
// let month = currentDate.getMonth()+1;
// let date = currentDate.getDate();
// let day = currentDate.getDay()+1;
// let hours = currentDate.getHours();
// let minutes = currentDate.getMinutes();

// console.log(year);
// console.log(month);
// console.log(date);
// console.log(day);
// console.log(hours);
// console.log(minutes);


/* 7. Find out the numbers of seconds elapsed from January 1, 1970 to now. */

// var time = new Date;
// var yearSince =  time.getTime();
// var milisec =  Math.floor(yearSince/1000);
// console.log(milisec);





/*********************************************************************LEVEL 2*****************************************************************/








/* 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h). 
Enter base: 20 
Enter height: 10 
The area of the triangle is 100 */

// var base = prompt("Enter the breadth of the triangle");
// var height = prompt("Enter the height of the triangle");

// let area = 0.5 * base *height;

// console.log("the area of the rectangle is "+area);




/* 2.Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c) 
Enter side a: 5 
Enter side b: 4 
Enter side c: 3 
The perimeter of the triangle is 12 
 */

// var a = parseInt(prompt("Enter side a"));
// var b = parseInt(prompt("Enter side b"));
// var c = parseInt(prompt("Enter side c"));

// var peri = (a+b+c);

// alert("The perimeter of the triangle is  "+peri);





/*3.Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter
 of rectangle (perimeter = 2 x (length + width)) */

//  var length = parseInt(prompt("Enter the length of rectangle"));
//  var width = parseInt(prompt("Enter the breadth of rectangle"));

//  var area = (length*width);
//  var perimeter = 2*(length+width);
//  alert("The area of the rectangle is "+ area +" and perimeter is "+perimeter);





/* 4.  Get radius using prompt and calculate the area of a circle 

(area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14. */

// var r = parseInt(prompt("Enter the radius of the circle"));
// const pi = 3.14;

// var area = pi*r*r;
// var c = 2*pi*r;

// alert("The area of the circle is "+area+" and circumfernce is "+c);




/**5. Calculate the slope, x-intercept and y-intercept of y = 2x -2  */

// var m1 = 2;
// var y = -2;
// var x = -(-2) / 2;

// console.log("Slope (m) = " + m1 + "Y-intercept (b) = " + y + "X-intercept = " + x);




/**6.  Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10) */

// var y1 = 2;
// var y2 = 10;
// var x1 = 2;
// var x2 = 6;

// var m2 = (y2-y1)/(x2-x1);

// console.log("The slope of is "+ m);





/**7.Compare the slope of above two questions.  */

// if (m1>m2) {
//     console.log("The slope m1 "+m1+" is greater than m2 "+m2);
// } else if(m2>m1) {
//     console.log("The slope m2 "+m2+" is greater than m1 "+m1);
// }
// else {
//     console.log("The slope m1 " +m1 == +"the slope m2 "+m2);
// }






/**8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0 */

// function findRoots() {
//     var a = 1;
//     var b = 6;
//     var c = 9;

//     var discri = b*b - 4*a*c;

//     if (discri > 0) {
//         var root1 = (-b + Math.sqrt(discri))/ 2*a;
//         var root2 = (-b - Math.sqrt(discri))/2*a;
//         console.log("Root 1: " + root1);
//         console.log("Root 2: " + root2);
//     } else if (discri == 0) {
//         var root = -b / (2 * a);
//         console.log("Root: " + root);
//     } else {
//         console.log("No real roots exist.");
//     }
// }

// findRoots();





/** 9. Writ a script that prompt a user to enter hours and rate per hour. Calculate
pay of the person?
Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120 */

// var hours = prompt("Enter the hours ");
// var rate = prompt("Enter the rate ");

// var earning = hours*rate;

// alert("Your weekly earning is "+earning);


/**10. If the length of your name is greater than 7 say, your name is long else say your name is short. */

// var firstName =prompt("Enter your name");
// var secondName =prompt("Enter the second name");

// if (firstName.length > secondName.length) {
//     alert("Your name is long");
// } else {
//     alert("Your name is short");
// }





/**11. Compare your first name length and your family name length and you should get this output. */

// let yourName = "Shubham";
// let familyName = "Dinanath";

// if (yourName.length > familyName.length) {
//     console.log("Your name is long ");
// } else {
//     console.log("Family name is long");
// }





/**12  Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge */

// let myAge = 25;
// let yourAge = 67;

// var ageDiff = yourAge - myAge;

// console.log("I am "+ageDiff+" years older than you.");





/**13.Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user
 to wait a certain amount of years.*/

// var birthYear = parseInt(prompt("Enter your birth year:"));
// var currentYear = new Date().getFullYear();

// var age = currentYear - birthYear;

// if (age >= 18) {
//     alert("You are " + age + " years old. You are allowed to drive.");
// } else {
//     var yearsWait = 18 - age;
//     alert("You are " + age + " years old. You need to wait " + yearsWait + " more years to drive.");
// }





/**14.Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live.
 Assume some one lives just hundred years */

// var age = prompt("Enter your age ");
// var seconds = age * 31536000;
// alert("You lived "+seconds+" second");





/**15. Create a human readable time format using the Date time object 
1. YYYY-MM-DD HH:mm 
2. DD-MM-YYYY HH:mm 
3. DD/MM/YYYY HH:mm 
 */

// var now = new Date();

// function pad(number) {
//     if (number<10) {
//         return '0' + number;
//     }
//     return number;
// }

// var format1 = now.getFullYear() + '-'+ pad(now.getMonth()+1) + '-' + pad(now.getDate()+1) +" "+ pad(now.getHours())+":" + pad(now.getMinutes());
// var format2 = pad(now.getDate()+1)+ '-'+ pad(now.getMonth()+1) +'-'+ now.getFullYear()+"  "+ pad(now.getHours())+":" + pad(now.getMinutes());
// var format3 = pad(now.getDate()) + '/' + pad(now.getMonth() + 1) + '/' + now.getFullYear() + ' ' + pad(now.getHours()) + ':' + pad(now.getMinutes());
// console.log("Format 1 is YYYY-MM-DD HH:mm " +format1);
// console.log("Format 2 is DD-MM-YYYY HH:mm  " +format2);
// console.log("Format 3 is DD/MM/YYYY HH:mm  " +format3);





/****************************************************************LEVEL - 3******************************************************************/

// 1. Create a human readable time format using the Date time object. The hour and
// the minute should be all the time two digits(7 hours should be 07 and 5 minutes
// should be 05 )
// 1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05

// function formatDateTime(date) {
//     const year = date.getFullYear();
//     const month = date.getMonth() + 1; // getMonth() returns a value from 0 to 11, so we add 1 to get the actual month number
//     const day = date.getDate();
//     const hours = date.getHours();
//     const minutes = date.getMinutes();

//     const monthString = month < 10? '0' + month : month;
//     const dayString = day < 10? '0' + day : day;
//     const hoursString = hours < 10? '0' + hours : hours;
//     const minutesString = minutes < 10? '0' + minutes : minutes;

//     return `${year}-${monthString}-${dayString} ${hoursString}:${minutesString}`;
// }

// const date = new Date();
// const formattedDate = formatDateTime(date);
// console.log(formattedDate);