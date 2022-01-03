//========== JavaScript Fundamental Part 1 ==========//
/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

let firstName = "ahmed";
let PI = 3.1415;

console.log(firstName);

*/

// Assignment 1: Values and Variables

/*
let country = "Bangladesh";
let continet = "Dhaka";
let population = 17 ;
console.log(country);
console.log(continet);
console.log(population);

*/

//===Data Types===//

/*
let javaScriptIsFun = true;

console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "istiaq");
javaScriptIsFun = "Yes!";
console.log(typeof javaScriptIsFun)

let year;
console.log(year);
console.log(typeof year);

year = 2022;
console.log(year)

console.log(typeof null)
*/
// Assignment 2: Data Types
/*
let isIsland = "Bangladesh";

isIsland = true;

let language;

console.log(typeof isIsland);
console.log(typeof language);

*/

// 08. Let Const var
/*
let age = 30;
age = 35;
const birthYear = 1998;

console.log(birthYear);

const job;

var job  = "programmer";
job = " teacher";

*/

/*
//===Basic Operators===//

//Math Operators

const now = 2022;

const ageIstiaq = now - 1994;
const ageAhmed = now - 1996;

console.log(ageIstiaq , ageAhmed);

console.log(ageIstiaq * 2, ageIstiaq / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName =  "Istiaq";
const lastName = "Ahmed";
console.log(firstName + " " + lastName);

//Assignment Operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x); 

//Comparison Operators

console.log(ageIstiaq > ageAhmed);  // > , < , >= , <=

console.log(ageAhmed >= 18);

const isFullAge = ageAhmed >= 18; 
console.log(now - 1994 > now - 1996 )
*/

/*
//===Assignment on Operators

const Bangladesh = 10000;
const Finland = 8000;

console.log(Bangladesh > Finland);

console.log(Bangladesh / 2);

let bangladeshPopulation = 20000;
bangladeshPopulation++;
// bangladeshPopulation--;
console.log(bangladeshPopulation);

const description = "Portugal is in Europe, and its 11 million people speak portuguese"

console.log(description);

*/

//===Operator Precedence===//
/*
const now = 2037;
const ageIstiaq = now - 1994;
const ageAhmed = now - 2022;

console.log(now - 1991 > now - 2022);
  

let x ,  y;
 x = y = 25 - 10 - 5; //  x = y = 10
 console.log(x,y);
 const avarageAge = (ageIstiaq + ageIstiaq) / 2;

 console.log(ageIstiaq, ageAhmed , avarageAge);

*/

//=====video no 11 Coding Challenge #1====//

/* question

Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.*/


/*
const massMark = 78;
const massJohn = 92;

const heightMark = 1.69;
const heightJhon = 1.95;


const bmiMark = massMark / heightMark ** 2;
console.log(bmiMark);

const bmiJhon = massJohn / heightJhon ** 2;
console.log(bmiJhon);

const markHigherBmi = bmiMark > bmiJhon;

console.log(markHigherBmi);

*/
//pass the test

//========String and Templates=======//
/*
const firstName = "Istiaq";
const job = "Intern";
const birthYear = 1998;
const year = 2022;


const istiaq = " I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(istiaq);
*/

//template literal ES6 Feature
/*
const istiaqNew = `I'm ${firstName} a ${year - birthYear} year old ${job}!`;
console.log(istiaqNew);

console.log(`just a regular string...`);

console.log("String with \n\
multiple \n\
lines ") // using newline tag

console.log(`String
with
multiple
line
`); // using template literal

*/

//=====Taking decisions If_Else=====//


/*
const age = 17;


//control structure 
if(age >= 18){

    console.log("Istiaq is eligible for the driving license ❤❤❤")

}

else{
    const yearLeft = 18 - age;
    console.log(`Still young ${yearLeft} year left to get the license`);
}


const birthYear = 1994;
let century;
if(birthYear <= 2000){
     century = 20;
}

else{
     century = 21;
}

console.log(century + ' Century')

*/

//=====video no 14 Coding Challenge #1====//

/* question

Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

*/
/*
const massMark = 78;
const massJohn = 92;

const heightMark = 1.69;
const heightJhon = 1.95;


const bmiMark = massMark / heightMark ** 2;


const bmiJhon = massJohn / heightJhon ** 2;

 if(bmiMark > bmiJhon){
     console.log(`Mark's BMI is higher than Jhon's
     Mark's BMI is ${bmiMark}`);
 }

 else{
    console.log(`Jhon's BMI is higher than Mark's
    Jhon's BMI is ${bmiJhon}`);
 }

 */

 // pass the test


 //==== Conversion and Coercion ====//


//type conversion
 const inputYear = '1991';
console.log(Number(inputYear));
 console.log(Number(inputYear) + 18);
 console.log(Number('Hello'));
 console.log(typeof NaN);
 console.log(String(5), 23);

 //type coercion
 console.log('i am ' + 23 + ' years old');
 console.log('i am ' + '23' + ' years old');



