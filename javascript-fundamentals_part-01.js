// ====== Javascript Fundamentals - Part 1 ======
// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = 'Matilda';
// let first = 'Jonas';
// let firstNamePerson; // camelCase naming convention(standard for JavaScript)
// let first_name_person; // Ruby naming convention using underscores

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// //let 3years = 3; Can't name variables with a numerical value

// let jonas_matilda = 'JM';
// let $jonas_matilda = 'JM'; // variable names can start with the money sign as well
// // let function = 27; reserved variable name and will throw an error

// let PI = 3.1435; // if it's a real constant, write it in uppercase like this

// let myFirstJob = 'Programmer'; // make variable names descriptive
// let myCurrentJob = 'Teacher'; // make variable names descriptive

// console.log(myFirstJob);
// console.log(myCurrentJob);



// ASSIGNMENT #1 - Values and Variables
// let country = 'United States';
// let continent = 'North America';
// let population = 332.28 + " million";
// console.log(country, continent, population);



// ====== JavaScript Fundamentals - Part 1.2 ======
// 7 primitive data types
//  1. Number: Floating point numbers - used for decimals and integers. ex: let age = 23;
//  2. String: Sequence of characters - used for text. ex: let firstName = 'jonas';
//  3. Boolean: Logical type that can only be 'true' or 'false' - used for taking decisions. ex: let fullAge = true;
//  4. Undefined: Value taken by a variable that is not yet defined ("empty value"). ex: let children;
//  5. Null: Also means 'empty value'.
//  6. Symbol (ES2015): Value that is unique and cannot be changed.
//  7. BigInt (ES2020): Larger integers than the Number type can hold.

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true); // typeof checks the value data type
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);
// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);



// // ASSIGNMENT #2 - Data Types
// let isIsland = 'Hawaii';
// let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);



// ====== JavaScript Fundamentals - Part 1.3 ======

// // let - used for variables we will be changing (reassigning/mutating a variable) later.
// let age = 30;
// age = 31;

// // const - to declare variables that are not supposed to change in the future.

// const birthYear = 1991;
// //  birthYear = 1990; // This reassignment/mutation attempt will throw an error.

// // const job; // When using const, you need to initialize the variable by giving it a value.

// // var - globally scoped. Should generally be avoided, but known for legacy reasons.
// var job = 'programmer';
// job = 'teacher';

// // Since there wasn't let, const, or var assigned to the value, this will be assigned to the global object.(?)
// lastName = 'Ramos';
// console.log(lastName);



// ====== JavaScript Fundamentals - Part 1.4 ======

// An operator allows us to change or calculate values.

// // Assignmment Operators
// const now = 2037;
// const ageBrandon = now - 1993;
// const ageSarah = now - 2018;
// console.log(ageBrandon, ageSarah);

// console.log(ageBrandon * 2, ageBrandon / 10, 2 ** 3);

// const firstName2 = 'Brandon';
// const lastName2 = 'Ramos';
// console.log(firstName2 + ' ' + lastName2);

// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x ++; // x = x + 1
// x --; // x = x - 1
// x --; // x = x - 1
// console.log(x);

// // Comparison Operators
// console.log(ageBrandon > ageSarah); // Greater than
// console.log(ageBrandon < ageSarah); // Lesser than
// console.log(ageBrandon <= ageSarah); // Lesser or Equal
// console.log(ageBrandon >= ageSarah); // Greater or Equal

// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);



// ====== JavaScript Fundamentals - Part 1.5 ======

// const now = 2037;
// const ageBrandon = now - 1993;
// const ageSarah = now - 2018;
// console.log(ageBrandon, ageSarah);

// console.log(now - 1991 > now - 2018); // JavaScript has an order of operation precedence. Check out MDN Operator Precedence for the table to check back on.

// // console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, y = 10 then x = 10 because the assignment operator reads right-to-left
// console.log(x, y);

// const averageAge = (ageBrandon + ageSarah) / 2;
// console.log(ageBrandon, ageSarah, averageAge);



// ====== JavaScript Fundamentals - Part 1.6 CODING CHALLENGE ======

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const calculateMarkBMI = markMass / markHeight ** 2;
const calculateJohnBMI = johnMass / (johnHeight * johnHeight);

const markHigherBMI = calculateMarkBMI > calculateJohnBMI;

console.log(calculateMarkBMI, calculateJohnBMI, markHigherBMI);

const markMass2 =95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;

const calculateMarkBMI2 = markMass2 / markHeight2 ** 2;
const calculateJohnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);

const markHigherBMI2 = calculateMarkBMI2 > calculateJohnBMI2;

console.log(calculateMarkBMI2, calculateJohnBMI2, markHigherBMI2);



// ====== JavaScript Fundamentals - Part 2 ======
