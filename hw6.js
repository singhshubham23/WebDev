// Exercises: Level 1
const countries = [
'Albania',
'Bolivia',
'Canada',
'Denmark',
'Ethiopia',
'Finland',
'Germany',
'Hungary',
'Ireland',
'Japan',
'Kenya'
]
const webTechs = [
'HTML',
'CSS',
'JavaScript',
'React',
'Redux',
'Node',
'MongoDB'
]
// const mernStack = ['MongoDB', 'Express', 'React', 'Node']
// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let index = 0; index < countries.length; index++) {
    const element1 = countries[index];
    console.log(element1);
}

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
let index = countries.length;
do {
    console.log(countries[index]);
    index--;
} while (index >= 0);

while (index >= 0) {
    console.log(index);
    index--;
}


// 3. Iterate 0 to n using for loop

let n = 5;
for (let index = 0; index <= n; index++) {
    console.log(index);
}





// 4. Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######


for (let index = 0; index < 7; index++) {
    let line = '';
    for (let j = 0; j <= index; j++) {
        line += '#';
    }
    console.log(line);
}


// 5. Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for (let index = 0; index < 11; index++) {
    let line = '';
    let result = index * index;
    line += index + ' x ' + index + ' = ' + result;
    console.log(line);
}



// 6. Using loop print the following pattern
// i i^2 i^3
// 0 0 0
// 1 1 1
// 2 4 8
// 3 9 27
// 4 16 64
// 5 25 125
// 6 36 216
// 7 49 343
// 8 64 512
// 9 81 729
// 10 100 1000

for (let index = 0; index < 11; index++) {
    let line = '';
    let result = index * index;
    let result1 = index * index *index;
    line += index + ' ' + result + ' ' + result1;
    console.log(line);
}







// 7. Use for loop to iterate from 0 to 100 and print only even numbers
for (let index = 0; index < 100; index++) {
    if (index % 2 == 0) {
        console.log(index);
    }
}



// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
for (let index = 0; index < 100; index++) {
    if (index % 2 != 0) {
        console.log(index);
    }
}
// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
for (let index = 0; index <= 100; index++) {
    let isPrime = true;
    for (let j = 2; j < index; j++) {
        if (index % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(index);
    }

}

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let index = 0; index <= 100; index++) {
    sum += index;
}
console.log("The sum of all numbers from 0 to 100 is "+sum);
// The sum of all numbers from 0 to 100 is 5050.


// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the
// sum of all odds.
let sumEven = 0;
let sumOdd = 0;
for (let index = 0; index < 100; index++) {
    if (index % 2 == 0) {
        sumEven += index;
    } else {
        sumOdd += index;
    }
}
console.log("The sum of all evens from 0 to 100 is "+sumEven);
console.log("The sum of all evens from 0 to 100 is "+sumOdd);

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the
// sum of all odds. Print sum of evens and sum of odds as array
// [2550, 2500]
for (let index = 0; index < 100; index++) {
    if (index % 2 == 0) {
        sumEven += index;
    } else {
        sumOdd += index;
    }
}
console.log([sumEven, sumOdd]);


// 13. Develop a small script which generate array of 5 random numbers
// function generateRandomNumbers(count) {
//     const randomNumbers = [];
//     for (let i = 0; i < count; i++) {
//       randomNumbers.push(Math.random()*10);
//     }
//     return randomNumbers;
//   }
  
//   const numberOfRandomNumbers = 5;
//   const randomNumbersArray = generateRandomNumbers(numberOfRandomNumbers);
//   console.log(randomNumbersArray);

function generateRandomIntegers(count) {
    const randomIntegers = [];
    for (let i = 0; i < count; i++) {
      const randomInteger = Math.floor(Math.random() *100);
      randomIntegers.push(randomInteger);
    }
    return randomIntegers;
  }
  
  const numberOfRandomIntegers = 5;
  const randomIntegersArray = generateRandomIntegers(numberOfRandomIntegers);
  console.log(randomIntegersArray);
  

// 14. Develop a small script which generate array of 5 random numbers and the numbers
// must be unique
function generateUniqueRandomNumbers(count) {
    const uniqueNumbers = new Set();
    while (uniqueNumbers.size < count) {
      const randomNumber = Math.floor(Math.random() * 100);
      uniqueNumbers.add(randomNumber);
    }
    return Array.from(uniqueNumbers);
  }
  
  const numberOfRandomNumbers = 5;
  const uniqueRandomNumbersArray = generateUniqueRandomNumbers(numberOfRandomNumbers);
  console.log(uniqueRandomNumbersArray);
// 15. Develop a small script which generate a six characters random id:
// 5j2khz
function generateRandomId(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomId = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      randomId += charset[randomIndex];
    }
    return randomId;
  }
  
  const randomId = generateRandomId(6);
  console.log(randomId);
  


  /////////////////////////////////////EXERCISE-2////////////////////////////////////// 
   //   1. Develop a small script which generate any number of characters random id:
// fe3jo1gl124g
// xkqci4utda1lmbelpkm03rba
function generateRandomCharacters() {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomCharacters = '';
    for (let i = 0; i < 26; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        randomCharacters += charset[randomIndex];
    }
    return randomCharacters;
    
}
const randomCharacters = generateRandomCharacters();
console.log(randomCharacters);






// 2. Write a script which generates a random hexadecimal number.
// '#ee33df'

function hexadecimalCode() {
    const charset = '0123456789abcdef';
    let hexadecimalCode = '#';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        hexadecimalCode += charset[randomIndex];
    }
    return hexadecimalCode;
    
}
const hexaDecimalCode = hexadecimalCode();
console.log(hexaDecimalCode);






// 3. Write a script which generates a random rgb color number.
// rgb(240,180,80)

function redGreenBlue() {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})`;
}
const rgb = redGreenBlue();
console.log(rgb);



// 4. Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY",
// "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

const countriess = ['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA'];
const newArray = countriess.slice(0, 11);
console.log(newArray);

// 5. Using the above countries array, create an array for countries length'.
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
const lengths = countriess.map(country => country.length);
console.log(lengths);
// 6. Use the countries array to create the following array of arrays:
// [
// ['Albania', 'ALB', 7],
// ['Bolivia', 'BOL', 7],
// ['Canada', 'CAN', 6],
// ['Denmark', 'DEN', 7],
// ['Ethiopia', 'ETH', 8],
// ['Finland', 'FIN', 7],
// ['Germany', 'GER', 7],
// ['Hungary', 'HUN', 7],
// ['Ireland', 'IRE', 7],
// ['Iceland', 'ICE', 7],
// ['Japan', 'JAP', 5],
// ['Kenya', 'KEN', 5]
// ]

const newArrayy = countriess.map(country => [country, country.slice(0, 3), country.length]);
console.log(newArrayy);
// 7. In above countries array, check if there is a country or countries containing
// the word 'land'. If there are countries containing 'land', print it as array.
// If there is no country containing the word 'land', print 'All these countries
// are without land'.
// ['Finland','Ireland', 'Iceland']

const land = countriess.filter(country => country.includes('LAND'));
console.log(land);


// 8. In above countries array, check if there is a country or countries end with a
// substring 'ia'. If there are countries end with, print it as array. If there is
// no country containing the word 'ai', print 'These are countries ends without
// ia'.
// ['Albania', 'Bolivia','Ethiopia']
const ia = countriess.filter(country => country.includes('IA'));
console.log(ia);



// 9. Using the above countries array, find the country containing the biggest number
// of characters.
// Ethiopia

const longestCountry = countriess.reduce((longest, current) => {
    return current.length > longest.length? current : longest;
});
console.log(longestCountry);


// 10. Using the above countries array, find the country containing only 5 characters.
// ['Japan', 'Kenya']

const fiveLetterCountries = countriess.filter(country => country.length === 5);
console.log(fiveLetterCountries);



// 11. Find the longest word in the webTechs array


const webTech = webTechs.reduce((longest, current) => {
    return current.length > longest.length? current : longest;
});
console.log(webTech);

// 12. Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node",
// 4],["MongoDB", 7]]

const newArr = webTechs.map(webTechs => [webTechs,webTechslength]);
console.log(newArr);



// 13. An application created using MongoDB, Express, React and Node is called a MERN
// stack app. Create the acronym MERN by using the array mernStack

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
const acronym = mernStack.map(word => word[0]).join('');
console.log(acronym);

// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node",
// "Express", "MongoDB"] using a for loop or for of loop and print out the items.

for (let i = 0; i< webTechs.length; i++) {
  console.log(webTechs[i]);
    }



// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the
// order using loop without using a reverse method.

const fruits = ['banana', 'orange', 'mango', 'lemon'];
for (let index = fruits.length-1; index >= 0 ; index--) {
    console.log( fruits[index]);
    
}


// 16. Print all the elements of array as shown below.
// const fullStack = [
// ['HTML', 'CSS', 'JS', 'React'],
// ['Node', 'Express', 'MongoDB']
// ]
// HTML
// CSS
// JS
// REACT
// NODE
// EXPRESS
// MONGODB

const webApps = [['HTML', 'CSS', 'JS', 'React'],
 ['Node', 'Express', 'MongoDB']];

for (let i = 0; i < webApps.length; i++) {
    console.log(webApps[i]);
    
}










///////////////////////////////////////////////////////EXERCISE-3/////////////////////////////////////////////////

// 1. Copy countries array(Avoid mutation)
const countriesCopy = [...countries];
console.log(countriesCopy);

// 2. Arrays are mutable. Create a copy of array which does not modify the original.
// Sort the copied array and store in a variable sortedCountries
const sortedCountries = [...countries].sort();
console.log(sortedCountries);
console.log(countries);

// 3. Sort the webTechs array and mernStack array

webTechs.sort();
mernStack.sort();

console.log(webTechs);
console.log(mernStack);



// 4. Extract all the countries contain the word 'land' from the countries array and
// print it as array

//const land = countriess.filter(country => country.includes('LAND'));
console.log([land]);


// 5. Find the country containing the hightest number of characters in the countries
// array

console.log(longestCountry);


// 6. Extract all the countries contain the word 'land' from the countries array and
// print it as array
console.log([land]);
// 7. Extract all the countries containing only four characters from the countries
// array and print it as array
const newarray = countriess.map(country => [ country.slice(0, 4)]);
console.log(newarray);

// 8. Extract all the countries containing two or more words from the countries array
// and print it as array
const multiWordCountries = countries.filter(country => country.split(' ').length > 1);
console.log(multiWordCountries);

// 9. Reverse the countries array and capitalize each country and stored it as an
// array
const reverseCountries = countries.reverse().map(country => country.toUpperCase());
console.log(reverseCountries);

