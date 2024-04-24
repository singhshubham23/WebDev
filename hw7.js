// // // 1. Declare a function fullName and it print out your full name.
// function fullName() {
//     console.log("Shubhman Gill");
// }
// fullName()

// // // 2. Declare a function fullName and now it takes firstName, lastName as a parameter
// // // and it returns your full - name.
// function fullName(firstName, lastName) {
//     console.log(firstName + " " + lastName);
// }
// fullName("Shubhman", "Gill");

// // // 3. Declare a function addNumbers and it takes two two parameters and it returns sum.
// function addNumbers(num1, num2) {
//     console.log(num1 + num2);
// }
// addNumbers(10, 20);


// // // 4. An area of a rectangle is calculated as follows: area = length x width. Write a
// // // function which calculates areaOfRectangle.
// function areaOfRectangle(length, width) {
//     console.log(length * width);
// }
// // areaOfRectangle(10, 20);
// // // 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length +
// // // width). Write a function which calculates perimeterOfRectangle.
// function perimeterOfRectangle(length, width) {
//     console.log(2 * (length + width));
// }
// perimeterOfRectangle(10, 20);

// // // 6. A volume of a rectangular prism is calculated as follows: volume = length x
// // // width x height. Write a function which calculates volumeOfRectPrism.
// function volumeOfRectPrism(length, width, height) {
//     if (typeof length!== 'number' || typeof width!== 'number' || typeof height!== 'number') {
//       throw new Error('All arguments must be numbers');
//     }
  
//     const volu= length * width * height;
  
//     return volu;
//   }
  
//   const length = 5;
//   const width = 3;
//   const height = 4;
  
//   const vol = volumeOfRectPrism(length, width, height);
  
//   console.log(`The volume of the rectangular prism is: ${vol}`);


// // // 7. Area of a circle is calculated as follows: area = π x r x r. Write a function
// // // which calculates areaOfCircle
// function areaOfCircle(radius) {
//     const area = Math.PI * radius * radius;
//     return area;
//   }
//   const radius = 5;
//   const area = areaOfCircle(radius);
//   console.log(`The area of the circle is: ${area}`);
  


// // // 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write
// // // a function which calculates circumOfCircle
// function circumOfCircle(radius) {
//     const circumference = 2*Math.PI*radius;
//     return circumference;
// }
// const circumfer = circumOfCircle(radius);
// console.log(`The circumference of the circle is: ${circumfer}`);

// // // 9. Density of a substance is calculated as follows:density= mass/volume. Write a
// // // function which calculates density.
// let volume = 3000;
// let mass = 200;
// function densityof(mass, volume)
// {
//     const dense = mass/volume;
//     return dense;
// }
// const density = densityof(mass, volume);
// console.log(`The density of the substance is: ${density}`);



// // // 10. Speed is calculated by dividing the total distance covered by a moving object
// // // divided by the total amount of time taken. Write a function which calculates a
// // // speed of a moving object, speed.
// let distance = 100;
// let time = 20;

// function speed(distance, time)
// {
//     const speed = distance/time;
//     return speed;
// }
// const speed1 = speed(distance, time);
// console.log(`The speed of the moving object is: ${speed1}`);




// // // 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write
// // // a function which calculates weight.
// let masss = 100;
// let gravity = 9.8;
// function weight(masss, gravity)
// {
//     const weight = masss * gravity;
//     return weight;
// }
// const weight1 = weight(masss, gravity);
// console.log(`The weight of the substance is: ${weight1}`);


// // // 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) +
// // // 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
// let Cel = 30;
// function convertCelsiusToFahrenheit(oC)
// {
//     const Fah = (oC * 9/5) + 32;
//     return fah;
// }
// const fah = convertCelsiusToFahrenheit(Cel);
// console.log(`The temperature in oF is: ${fah}`);



// // // 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x
// // // height) in m2. Write a function which calculates bmi. BMI is used to broadly
// // // define different weight groups in adults 20 years old or older.Check if a
// // // person is underweight, normal, overweight or obese based the information given
// // // below.
// // // The same groups apply to both men and women.
// // // Underweight: BMI is less than 18.5
// // // Normal weight: BMI is 18.5 to 24.9
// // // Overweight: BMI is 25 to 29.9
// // // Obese: BMI is 30 or more

// function calculateBmi(weight, heights) {
//   const bmi = weight / (heights ** 2);

//   let classification;
//   if (bmi < 18.5) {
//     classification = 'underweight';
//   } else if (bmi < 24.9) {
//     classification = 'normal weight';
//   } else if (bmi < 29.9) {
//     classification = 'overweight';
//   } else {
//     classification = 'obese';
//   }

//   return { bmi, classification };
// }

// const weight = 70;
// const heights = 1.75; 

// const { bmi, classification } = calculateBmi(weight, heights);

// console.log(`BMI: ${bmi}`);
// console.log(`Classification: ${classification}`);




// // // 14. Write a function called checkSeason, it takes a month parameter and returns the
// // // season:Autumn, Winter, Spring or Summer.

// function checkSeason(month) {
//   if (month === 'September' || month === 'October' || month === 'November') {
//       return 'Autumn';
//   } else if (month === 'December' || month === 'January' || month === 'February') {
//       return 'Winter';
//   } else if (month === 'March' || month === 'April' || month === 'May') {
//       return 'Spring';
//   } else if (month === 'June' || month === 'July' || month === 'August') {
//       return 'Summer';
//   } else {
//       return 'Invalid month';
//   }
// }

// let months = prompt("Enter the month name = ");
// console.log(checkSeason(months));



// // // 15. Math.max returns its largest argument. Write a function findMax that takes
// // // three arguments and returns their maximum with out using Math.max method.
// // // console.log(findMax(0, 10, 5))
// // // 10
// // // console.log(findMax(0, -10, -2))

// function findMax() {
//   let num1 = prompt("Enter first number:");
//   let num2 = prompt("Enter second number:");
//   let num3 = prompt("Enter third number:");

//   let max = Number(num1);
//   if (Number(num2) > max) {
//       max = Number(num2);
//   }
//   if (Number(num3) > max) {
//       max = Number(num3);
//   }
//   return max;
// }
// console.log(findMax());





// //----------------------------//////////////////////////////////////////EXERCISE 2///////////////////////////////////-----------------------------------------------///



// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function
// which calculates value of a linear equation, solveLinEquation.

function solveLinEquation(a, b, x, c, y) {
    return a * x + b * y + c;
}
const a = 2;
const b = 3;
const x = 4;
const c = 5;
const y = 6;
const result = solveLinEquation(a, b, x, c, y);
console.log(result);



// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function
// which calculates value or values of a quadratic equation, solveQuadEquation.
// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}

function solveQuadEquation(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [root1, root2];
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        return [root];
    } else {
        return [];
    }
}
console.log(solveQuadEquation(1, 4, 4));



// 3. Declare a function name printArray. It takes array as a parameter and it prints
// out each value of the array.
function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
const numbers = [1, 2, 3, 4, 5];
printArray(numbers);

// 4. Write a function name showDateTime which shows time in this format: 08/01/2020
// 04:08 using the Date object.
// showDateTime()
// 08/01/2020 04:08

function showDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const monthString = month < 10? '0' + month : month;
    const dayString = day < 10? '0' + day : day;
    const hoursString = hours < 10? '0' + hours : hours;
    const minutesString = minutes < 10? '0' + minutes : minutes;

    console.log(`${monthString}/${dayString}/${year} ${hoursString}:${minutesString}`);
}
showDateTime();



// 5. Declare a function name swapValues. This function swaps value of x to y.
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4
function swapValues(x, y) {
    const temp = x;
    x = y;
    y = temp;
    return [x, y];
}
console.log(swapValues(3, 4));
console.log(swapValues(4, 5));
// 6. Declare a function name reverseArray. It takes array as a parameter and it
// returns the reverse of the array (don't use method).

function reverseArray(array) {
    const reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}
const number = [1, 2, 3, 4, 5];
const reversedNumbers = reverseArray(number);
console.log(reversedNumbers);
// 7. Declare a function name capitalizeArray. It takes array as a parameter and it
// returns the - capitalizedarray.
function capitalizeArray(array) {
    const capitalizedArray = array.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedArray;
}
const words = ['hello', 'world', 'javascript'];
const capitalizedWords = capitalizeArray(words);
console.log(capitalizedWords);

// 8. Declare a function name addItem. It takes an item parameter and it returns an
// array after adding the item
const num = [1, 2, 3];
const newNumbers = addItem(4, num);
console.log(newNumbers);

// 9. Declare a function name removeItem. It takes an index parameter and it returns
// an array after removing an item
function removeItem(index, array) {
    return [...array.slice(0, index),...array.slice(index + 1)];
}
const newNumber = removeItem(2, numbers);
console.log(newNumber);

// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds
// all the numbers in that range.

function sumOfNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    return sum;
}
const sum = sumOfNumbers(5);
console.log(sum);

// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all
// the odd numbers in that - range.
function sumOfOdds(number) {
    let sum = 0;
    for (let i = 1; i <= number; i += 2) {
        sum += i;
    }
    return sum;
}
console.log(sumOfOdds(5)); 
console.log(sumOfOdds(10)); 



// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all
// the even numbers in that - range.
function sumOfEven(number) {
    let sum = 0;
    for (let i = 2; i <= number; i += 2) {
        sum += i;
    }
    return sum;
}
const sumof = sumOfEven(10);
console.log(sumof);

// 13. Declare a function name evensAndOdds . It takes a positive integer as parameter
// and it counts number of evens and odds in the number.
// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.

function evensAndOdds(number) {
    let evens = 0;
    let odds = 0;
    for (let i = 1; i <= number; i++) {
        if (i % 2 === 0) {
            evens++;
        } else {
            odds++;
        }
    }
    return [evens, odds];
}
console.log(evensAndOdds(100));



// 14. Write a function which takes any number of arguments and return the sum of the
// arguments
// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10

function sum(...args) {
    return args.reduce((sum, current) => sum + current, 0);
}
const sum1 = sum(1, 2, 3);
const sum2 = sum(1, 2, 3, 4);
console.log(sum1);
console.log(sum2);

// 15. Writ a function which generates a randomUserIp.
function randomUserIp() {
    const octets = [];
    for (let i = 0; i < 4; i++) {
        octets.push(Math.floor(Math.random() * 256));
    }
    return octets.join('.');
}
console.log(randomUserIp());
// 16. Write a function which generates a randomMacAddress
function randomMacAddress() {
    const macAddress = [];
    for (let i = 0; i < 6; i++) {
        macAddress.push(Math.floor(Math.random() * 16).toString(16));
    }
    return macAddress.join(':');
}
console.log(randomMacAddress());

// 17. Declare a function name randomHexaNumberGenerator. When this function is called
// it generates a random hexadecimal number. The function return the hexadecimal
// number.
// console.log(randomHexaNumberGenerator());
// '#ee33df'

function randomHexaNumberGenerator() {
    return Math.floor(Math.random() * 16).toString(16);
}
console.log(randomHexaNumberGenerator());


// 18. Declare a function name userIdGenerator. When this function is called it
// generates seven character id. The function return the id.
// console.log(userIdGenerator());
// 41XTDbE

function userIdGenerator() {
    const id = Math.random().toString(36).substr(2, 7);
    return id;
}
console.log(userIdGenerator());




////////////////////////////////////////////////////EXERCISE-3////////////////////////////////////////////////////////////////




// 1. Modify the userIdGenerator function. Declare a function name
// userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs
// using prompt(). One of the input is the number of characters and the second
// input is the number of ids which are supposed to be generated.
// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S

// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr

function userIdGeneratedByUser() {
    const numChars = parseInt(prompt("Enter the number of Characters"));
    const numIds = parseInt(prompt("Enter the number of Ids"));
    const ids = [];

    for (let i= 0; i < numIds; i++){
        let id = '';
        for(int j = 0; j < numChars; j++){
            id +=  Math.floor(Math.random() * 36).toString(36);
    }
    ids.push(id);
    }

    return ids;
}
const generatedIds = userIdGeneratedByUser();
console.log(generatedIds);



// 2. Write a function name rgbColorGenerator and it generates rgb colors.
// rgbColorGenerator()
// rgb(125,244,255)
function rgbColorGenerator() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

console.log(rgbColorGenerator());



// 3. Write a function arrayOfHexaColors which return any number of hexadecimal
// colors in an array.
function arrayOfHexaColors(num) {
    const colors = [];
    for (let i = 0; i < num; i++) {
        let color = '#';
        for (let j = 0; j < 6; j++) {
            color += Math.floor(Math.random() * 16).toString(16);
        }
        colors.push(color);
    }
    return colors;
}
console.log(arrayOfHexaColors(5));


// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an
// array.
function arrayOfRgbColors() {
    const colors  = [];
    for (let i = 0; i < num; i++) {
        const red = Math.floor(Math.random()* 256);
        const green = Math.floor(Math.random()* 256);
        const blue = Math.floor(Math.random()*256);
        colors.push(`rgb(${red}, ${green}, ${blue})`);
        
    }
    return colors;
}
console.log(arrayOfRgbColors(5));


// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it
// returns an rgb color.
function convertHexaToRgb(hex) {
    const r = parseInt(hex.substring(1,3),16);
    const g = parseInt(hex.substring(3,5),16);
    const b = parseInt(hex.substring(5,7),16);
    return `rgb(${r}, ${g}, ${b})`;
}
console.log(convertHexaToRgb('#000000'));

// 6. Write a function convertRgbToHexa which converts rgb to hexa color and it
// returns an hexa color.
function convertRgbToHexa(rgb) {
    const r = parseInt(rgb.substring(4,7));
    const g = parseInt(rgb.substring(7,10));
    const b = parseInt(rgb.substring(10,13));
    return `#${r.toString(16)} ${g.toString(16)}${b.toString()}`;
}

console.log(convertRgbToHexa('rgb(65, 78, 222)'))

// 7. Write a function generateColors which can generate any number of hexa or rgb
// colors.
function generateColors(num, type) {
    const colors = [];
    for (let i = 0; i < num; i++) {
        if (type === 'hex') {
            let color = '#';
            for (let j = 0; j < 6; j++) {
                color += Math.floor(Math.random() * 16).toString(16);
            }
            colors.push(color);
        } else if (type === 'rgb') {
            const red = Math.floor(Math.random() * 2**8);
            const green = Math.floor(Math.random() * 2**8);
            const blue = Math.floor(Math.random() * 2**8);
            colors.push(`rgb(${red}, ${green}, ${blue})`);
        }
    }
    return colors;
}
console.log(generateColors('hexa', 3));
console.log(generateColors('rgb', 3));
// 8. Call your function shuffleArray, it takes an array as a parameter and it
// returns a shuffled array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
console.log(shuffleArray([1, 2, 3, 4, 5]));

// 9. Call your function factorial, it takes a whole number as a parameter and it
// return a factorial of the number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(33));


// 10. Call your function isEmpty, it takes a parameter and it checks if it is empty
// or not
function isEmpty(value) {
    if (Array.isArray(value)) {
        return value.length === 0;
    } else if (typeof value === 'object') {
        return Object.keys(value).length === 0;
    } else {
        return!value;
    }
}
const array = [];
const object = {};
const string = '';
const boolean = false;
const nullValue = null;
const undefinedValue = undefined;

// 11. Call your function sum, it takes any number of arguments and it returns the
// sum.
function sum(...args) {
    return args.reduce((sum, current) => sum + current, 0);
}
const sum3 = sum(1, 2, 3);
const sum4 = sum(1, 2, 3, 4);
console.log(sum3);
console.log(sum4);
// 12. Write a function called sumOfArrayItems, it takes an array parameter and return
// the sum of all the items. Check if all the array items are number types. If not
// give return reasonable feedback.
function sumOfArrayItems(array) {
    if (!Array.isArray(array)) {
        return 'The input is not an array.';
    }

    const sum = array.reduce((sum, current) => {
        if (typeof current!== 'number') {
            return 'Not all items in the array are numbers.';
        }
        return sum + current;
    }, 0);

    return sum;
}
console.log(sumOfArrayItems([1,2,'3',4,5]));
// 13. Write a function called average, it takes an array parameter and returns the
// average of the items. Check if all the array items are number types. If not
// give return reasonable feedback.
function average(array) {
    if (!Array.isArray(array)) {
        return 'The input is not an array.';
    }

    const sum = array.reduce((sum, current) => {
        if (typeof current!== 'number') {
            return 'Not all items in the array are numbers.';
        }
        return sum + current;
    }, 0);

    if (sum === 0) {
        return 'The array is empty.';
    }

    return sum / array.length;
}
console.log(average([1,2,3,4,5]));
// 14. Write a function called modifyArray takes array as parameter and modifies the
// fifth item of the array and return the array. If the array length is less than
// five it return 'item not found'.
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango',
// 'Lemon','Carrot']);
function modifyArray(array) {
    if (array.length < 5) {
        return 'item not found';
    }

    array[4] = 'modified';
    return array;
}
const fruits = ['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot'];
const modifiedFruits = modifyArray(fruits);
console.log(modifiedFruits);


// 15. Write a function called isPrime, which checks if a number is prime number.
function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}
console.log(isPrime(139));
// 16. Write a functions which checks if all items are unique in the array.
function areItemsUnique(array) {
    const set = new Set(array);
    return set.size === array.length;
}
const num1 = [1, 2, 3, 4, 5];
const uniqueNumbers = areItemsUnique(num1);
console.log(uniqueNumbers);
// 17. Write a function which checks if all the items of the array are the same data
// type.
function areItemsSameType(array) {
    const type = typeof array[0];
    for (let i = 1; i < array.length; i++) {
        if (typeof array[i]!== type) {
            return false;
        }
    }
    return true;
}
const mixed = [1, 2, '3', 4, 5];
const sameTypeMixed = areItemsSameType(mixed);
console.log(sameTypeMixed);
// 18. JavaScript variable name does not support special characters or symbols except
// $ or _. Write a function isValidVariable which check if a variable is valid or
// invalid variable.
function isValidVariable(name) {
    const regex = /^[$A-Z_][0-9A-Z_$]*$/i;
    return regex.test(name);
}
const name = '1my_variable';
const isValid = isValidVariable(name);
console.log(isValid);
// 19. Write a function which returns array of seven random numbers in a range of 0-9.
// All the numbers must be unique.
// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]
function sevenRandomNumbers() {
    const numbers = new Set();
    while (numbers.size < 7) {
        numbers.add(Math.floor(Math.random() * 10));
    }
    return [...numbers];
}
const randomNumbers = sevenRandomNumbers();
console.log(randomNumbers);
// 20. Write a function called reverseCountries, it takes countries array and first it
// copy the array and returns the reverse of the original array
function reverseCountries(array) {
    const copy = [...array];
    return copy.reverse();
}
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
const reversedCountries = reverseCountries(countries);
console.log(reversedCountries);