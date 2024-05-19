// 1. Create an empty object called dog

let dog = {};


// 2. Print the the dog object on the console

console.log(dog);



// 3. Add name, legs, color, age and bark properties for the dog object. The bark
// property is a method which return woof woof
dog.name = "Buddy";
dog.legs = 4;
dog.color = "Brown";
dog.age = 3;
dog.sound = "Bark";
dog.bark = function() {
    return "Woof Woof";
}




// 4. Get name, legs, color, age and bark value from the dog object


console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.sound);


// 5. Set new properties the dog object: breed, getDogInfo
dog.breed = "Blood Hound";
dog.getDogInfo = function() {
    return "My name is " + dog.name + " and I am " + dog.age + " years old. I am a " + dog
    .color + " " + dog.breed + " dog.";
}


/****************************************************EXERCISE-2*****************************************************************************************/




// 1.Find the person who has many skills in the users object.

function personWithMostSkills(users) {
    const userEntries = Object.entries(users);
    let maxSkills = 0;
    let personWithMostSkillsName = '';

    for (const [userName, userDetails] of userEntries) {
        const skillCount = userDetails.skills.length;
        if (skillCount > maxSkills) {
            maxSkills = skillCount;
            personWithMostSkillsName = userName;
        }
    }

    return personWithMostSkillsName;
}

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
};

console.log(personWithMostSkills(users)); // Output: Asab




//2. Count logged in users, count users having greater than equal to 50 points from the following object.

function countUsers(users) {
    let loggedInCount = 0;
    let highPointsCount = 0;

    for (const userDetails of Object.values(users)) {
        if (userDetails.isLoggedIn) {
            loggedInCount++;
        }
        if (userDetails.points >= 50) {
            highPointsCount++;
        }
    }

    return {
        loggedInCount,
        highPointsCount
    };
}

console.log(countUsers(users));

//3. Find people who are MERN stack developer from the users object

function developers(users) {
    const mernSkills = ['MongoDB', 'Express', 'React', 'Node'];
    const mernDevelopers = [];
    for (const  [userName, userDetails] of Object.entries(users)) {
        if (mernSkills.every(skills => userDetails.skills.includes(skills))) {
            mernDevelopers.push(userName);
        }        
    }
    return mernDevelopers;
}

console.log(developers(users));


// 4. Set your name in the users object without modifying the original users object


const newUser = {
    Shubham: {
        email: 'sks@openai.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'Node', 'React'],
        age: 1,
        isLoggedIn: true,
        points: 77
    }
};

const updatedUsers = { ...users, ...newUser };
console.log(updatedUsers);


// 5. Get all keys or properties of users object

for (const user of Object.values(users)) {
    console.log(Object.keys(user));
}

//6. Get all the values of users object

console.log(Object.values(users));

//7. Use the countries object to print a country name, capital, populations and languages.

const countries = {
    Afghanistan: {
        capital: 'Kabul',
        population: 37172386,
        languages: ['Pashto', 'Dari']
    },
    Albania: {
        capital: 'Tirana',
        population: 2866376,
        languages: ['Albanian']
    },
    Algeria: {
        capital: 'Algiers',
        population: 42228429,
        languages: ['Arabic']
    },
};

for (const country in countries) {
    if (Object.hasOwnProperty.call(countries, country)) {
        console.log(`Country: ${country}`);
        console.log(`Capital: ${countries[country].capital}`);
        console.log(`Population: ${countries[country].population}`);
        console.log(`Languages: ${countries[country].languages.join(', ')}`);
        console.log('----------------------');
    }
}








/********************************************************************EXERCISE - 3**************************************************************************** */




// 1. Create an object literal called personAccount. It has firstName, lastName,
// incomes, expenses properties and it has totalIncome, totalExpense,
// accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set
// of incomes and its description and expenses is a set of incomes and its
// description.









// Questions:2, 3 and 4 are based on the following two arrays:users and
// products ()
const users = [
{
_id: 'ab12ex',
username: 'Alex',
email: 'alex@alex.com',
password: '123123',
createdAt:'08/01/2020 9:00 AM',
isLoggedIn: false
},
{
_id: 'fg12cy',
username: 'Asab',
email: 'asab@asab.com',
password: '123456',

createdAt:'08/01/2020 9:30 AM',
isLoggedIn: true
},
{
_id: 'zwf8md',
username: 'Brook',
email: 'brook@brook.com',
password: '123111',
createdAt:'08/01/2020 9:45 AM',
isLoggedIn: true
},
{
_id: 'eefamr',
username: 'Martha',
email: 'martha@martha.com',
password: '123222',
createdAt:'08/01/2020 9:50 AM',
isLoggedIn: false
},
{
_id: 'ghderc',
username: 'Thomas',
email: 'thomas@thomas.com',
password: '123333',
createdAt:'08/01/2020 10:00 AM',
isLoggedIn: false
}
];
const products = [
{
_id: 'eedfcf',
name: 'mobile phone',
description: 'Huawei Honor',
price: 200,
ratings: [
{ userId: 'fg12cy', rate: 5 },
{ userId: 'zwf8md', rate: 4.5 }
],
likes: []
},
{
_id: 'aegfal',
name: 'Laptop',
description: 'MacPro: System Darwin',
price: 2500,
ratings: [],
likes: ['fg12cy']
},
{
_id: 'hedfcg',
name: 'TV',

description: 'Smart TV:Procaster',
price: 400,
ratings: [{ userId: 'fg12cy', rate: 5 }],
likes: ['fg12cy']
}
]
// Imagine you are getting the above users collection from a MongoDB database. a.
// Create a function called signUp which allows user to add to the collection. If
// user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the
// application

const personAccount = {
    firstName: '',
    lastName: '',
    incomes: [],
    expenses: [],
    
    get totalIncome() {
        return this.incomes.reduce((total, income) => total + income.amount, 0);
    },
    get totalExpense() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },


    get accountInfo() {
        return `Account Information:\nName: ${this.firstName} ${this.lastName}\nTotal Income: $${this.totalIncome}\nTotal Expenses: $${this.totalExpense}\nAccount Balance: $${this.accountBalance}`;
    },

    addIncome(description, amount) {
        this.incomes.push({ description, amount });
    },


    addExpense(description, amount) {
        this.expenses.push({ description, amount });
    },

    get accountBalance() {
        return this.totalIncome - this.totalExpense;
    }
};

personAccount.firstName = 'Jatin';
personAccount.lastName = 'Das';
personAccount.addIncome('Salary', 3000);
personAccount.addIncome('Freelancing', 500);
personAccount.addExpense('Rent', 1000);
personAccount.addExpense('Groceries', 300);

console.log(personAccount.accountInfo);



// 3. The products array has three elements and each of them has six properties. a.
// Create a function called rateProduct which rates the product b. Create a
// function called averageRating which calculate the average rating of a product



const proDucts = [
    {
        name: 'Laptop',
        price: 1000,
        ratings: [],
    },
    {
        name: 'Phone',
        price: 500,
        ratings: [],
    },
    {
        name: 'Tablet',
        price: 300,
        ratings: [],
    }
];

// Function to rate a product
function rateProduct(productIndex, rating) {
    if (productIndex >= 0 && productIndex < proDucts.length) {
        proDucts[productIndex].ratings.push(rating);
        console.log(`Rated ${products[productIndex].name} with ${rating} stars.`);
    } else {
        console.log('Invalid product index.');
    }
}


// Function to calculate average rating of a product
function averageRating(productIndex) {
    if (productIndex >= 0 && productIndex < proDucts.length) {
        const ratings = proDucts[productIndex].ratings;
        if (ratings.length === 0) {
            return 'No ratings yet.';
        }
        const totalRating = ratings.reduce((acc, rating) => acc + rating, 0);
        const avgRating = totalRating / ratings.length;
        return `Average rating for ${proDucts[productIndex].name}: ${avgRating.toFixed(2)} stars.`;
    } else {
        return 'Invalid product index.';
    }
}

// Example usage
rateProduct(0, 4);
rateProduct(0, 5);
rateProduct(1, 3);
rateProduct(1, 4);
rateProduct(1, 5);
rateProduct(2, 2);
rateProduct(2, 3);

console.log(averageRating(0));
console.log(averageRating(1));
console.log(averageRating(2));



//4.  Create a function called likeProduct. This function will helps to like to the
// product if it is not liked and remove like if it was liked.



function likeProduct(productIndex) {
    if (productIndex >= 0 && productIndex < products.length) {
        const product = products[productIndex];
        product.liked = !product.liked;
        if (product.liked) {
            console.log(`Liked ${product.name}.`);
        } else {
            console.log(`Removed like from ${product.name}.`);
        }
    } else {
        console.log('Invalid product index.');
    }
}


likeProduct(0); 
likeProduct(1); 
likeProduct(0); 
likeProduct(2); 










