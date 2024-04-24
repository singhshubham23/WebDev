// Exercise: Level 1

// 1. Declare an empty array;

let num = [];

// 2. Declare an array with more than 5 number of elements

let numbers = [1,2,3,4,5];

// 3. Find the length of your array

console.log(numbers.length);

// 4. Get the first item, the middle item and the last item of the array
console.log(numbers[0]);
console.log(numbers[2]);
console.log(numbers[4]);

// 5. Declare an array called mixedDataTypes, put different data types in the array
// and find the length of the array. The array size should be greater than 5

let mixedDataTypes = ['hello', 123, true, [1,2,3], 2.333,[1, 2, 3]];
console.log(mixedDataTypes.length);

//6. Declare an array variable name itCompanies and assign initial values Facebook,
// Google, Microsoft, Apple, IBM, Oracle and Amazon

let itCompanies =['Google', 'Microsoft','Apple','IBM', 'Oracle', 'Amazon'];


/*7. Print the array using console.log()  */
console.log(itCompanies);



// 8. Print the number of companies in the array
console.log(itCompanies.length);


// 9. Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[2]);



// 10. Print out each company
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}


// 11. Change each company name to uppercase one by one and print them out

for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
}
// 12. Print the array like as a sentencesentence: Facebook, Google, Microsoft, Apple,
//IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(', '));


// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let company = 'Google';

if (itCompanies.includes(company)) {
    console.log(company);
} else{
    console.log("A company is not found");
}

// 14. Filter out companies which have more than one 'o' without the filter method
let newArray = [];
for (let i = 0; i < itCompanies.length; i++) {
    if (itCompanies[i].match(/o.*o/i)) {
        continue;
    }
    newArray.push(itCompanies[i]);
}
console.log(newArray);



// 15. Sort the array using sort() method
console.log(itCompanies.sort());


// 16. Reverse the array using reverse() method
console.log(itCompanies.reverse());

// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));


// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));


// 19. Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3, 4));


// 20. Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);


// 21. Remove the middle IT company or companies from the array
itCompanies.splice(3, 1);
console.log(itCompanies);

//  22. Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

//  23. Remove all IT companies
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);









// Exercise: Level 2

/**1. Create a separate countries.js file and store the countries array in to this
file, create a separate file web_techs.js and store the webTechs array in to
this file. Access both file in main.js file */


// countries.js

let countries = ['USA', 'Canada', 'Mexico', 'Brazil', 'Argentina', 'Chile', 'Colombia', 'Peru', 'Venezuela', 'Ecuador'];

module.exports = countries;

// web_techs.js

let webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Vue', 'Node.js', 'Express.js', 'MongoDB', 'GraphQL'];

module.exports = webTechs;


// main.js

let countries = require('./countries');
let webTechs = require('./web_techs');

console.log(countries);
console.log(webTechs);


// 2. First remove all the punctuations and change the string to array and count the number of words in the array 
// let text = 
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.' console.log(words) 
// console.log(words.length) 
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"] 
// 13 

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(' ');
console.log(words);
console.log(words.length);


//3. In the following shopping cart add, remove, edit items 
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']add 'Meat' in the beginning of your shopping cart if it has not been already added
//add Sugar at the end of you shopping cart if it has not been already added remove 'Honey' if you are allergic to honey modify Tea to 'Green Tea'


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
shoppingCart.pop('Honey');

shoppingCart[3] = 'Green Tea';

console.log(shoppingCart);



// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list


if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA');
} else {
    countries.push('Ethiopia');
    console.log(countries);
}

//5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess If it does not exist add Sass to the array and print the array. 

if (!webTechs.includes('Sass')) {
    webTechs.push('Sass');
}

console.log(webTechs);


// 6. Concatenate the following two variables and store it in a fullStack variable. 
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'] 
// const backEnd = ['Node','Express', 'MongoDB'] 
// console.log(fullStack) 
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] 

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = [...frontEnd,...backEnd];

console.log(fullStack);






// Exercise: Level 3 





// 1. The following is an array of 10 students ages: 
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age 
// Find the median age(one middle item or two middle items divided by two) Find the average age(all items divided by number of items) 
// Find the range of the ages(max minus min) 
// Compare the value of (min - average) and (max - average), use abs() method 

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

const medianAge = ages.length % 2 === 0
 ? (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2
  : ages[Math.floor(ages.length / 2)];

const averageAge = ages.reduce((acc, age) => acc + age, 0) / ages.length;

const rangeAge = maxAge - minAge;

const diffMinAverage = Math.abs(minAge - averageAge);
const diffMaxAverage = Math.abs(maxAge - averageAge);

console.log(`Min age: ${minAge}`);
console.log(`Max age: ${maxAge}`);
console.log(`Median age: ${medianAge}`);
console.log(`Average age: ${averageAge}`);
console.log(`Range of ages: ${rangeAge}`);
console.log(`Difference between min and average: ${diffMinAverage}`);
console.log(`Difference between max and average: ${diffMaxAverage}`);




// 2. Slice the first ten countries from the countries array 


let country = ['USA', 'Canada', 'Mexico', 'Brazil', 'Argentina', 'Chile', 'Colombia', 'Peru', 'Venezuela', 'Ecuador', 'Bolivia', 'Paraguay', 'Uruguay', 'Guyana', 'Suriname', 'French Guiana', 'Falkland Islands'];

module.exports = country;


const country = require('./countries');

const firstTenCountries = country.slice(0, 10);

console.log(firstTenCountries);


// 3. Find the middle country(ies) in the countries array 

// countries.js

module.exports = countries;

// main.js

const middleIndex = Math.floor(countries.length / 2);

const middleCountry = countries.length % 2 === 0
 ? [countries[middleIndex - 1], countries[middleIndex]]
  : countries[middleIndex];

console.log(`Middle country(ies): ${middleCountry}`);



// 4. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

// countries.js

let countrie = ['USA', 'Canada', 'Mexico', 'Brazil', 'Argentina', 'Chile', 'Colombia', 'Peru', 'Venezuela', 'Ecuador', 'Bolivia', 'Paraguay', 'Uruguay', 'Guyana', 'Suriname', 'French Guiana', 'Falkland Islands'];

module.exports = countrie;

// main.js

const countrie = require('./countries');

const middleIndexes = Math.floor(countrie.length / 2);

const firstHalf = countrie.slice(0, middleIndexes);
const secondHalf = countrie.slice(middleIndexes);

if (countries.length % 2 === 0) {
  console.log(`First half: ${firstHalf}`);
  console.log(`Second half: ${secondHalf}`);
} else {
  const firstHalfWithExtra = countrie.slice(0, middleIndexes + 1);
  const secondHalfWithExtra = countrie.slice(middleIndexes + 1);

  console.log(`First half with extra country: ${firstHalfWithExtra}`);
  console.log(`Second half: ${secondHalfWithExtra}`);
}

















