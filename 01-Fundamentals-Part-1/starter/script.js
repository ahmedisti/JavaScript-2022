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
/*
 const inputYear = '1991';
console.log(Number(inputYear));
 console.log(Number(inputYear) + 18);
 console.log(Number('Hello'));
 console.log(typeof NaN);
 console.log(String(5), 23);

 //type coercion
 console.log('i am ' + 23 + ' years old');
 console.log('i am ' + '23' + ' years old');
 console.log('23' - '10' - 3);
 console.log('23' > '18');

 let n = '1' + 1; //11
 n = n - 1; // 11 - 1 = 10
 console.log(n); // 10

 // 2 + 3 + 4 + '5' = 9 + '5' = 95; 

*/


//==== Truthy and Falsy Value ====//


// 5 falsy value 0, '', undefined, null, NaN
/*
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('istiaq')); //true
console.log(Boolean({})); //true
console.log(Boolean()); //false

const money = 0; // because 0 is a falsy value that why  else will exiccute

if(money){
    console.log("Don't spend it all");
}
else{
    console.log("You Should get a job");
}

let height;
if(height){
    console.log("Yeahhhh defined")
}
else{
    console.log("ohhhhh undefind")
}

*/

//==== Equality Operators ====//

// === strict equality 18 === 18 true
// == loose equality '18' == 18 true
/*
const age = 18;

if(age === 18)
console.log("You are an adult(Strict)");
if(age == 18)
console.log("You are an adult(Loose)");

const favorite = Number( prompt("whats your favotite number")); // now 10 === 10
console.log(typeof favorite)

if ( favorite === 10){ // '10' == 10 if not use number function 
    console.log('Neymar jr');
}
else if(favorite === 7){
    console.log("CR7");
}
else{
    console.log("Nothing");
}


if(favorite !== 10){ //strict not equal
    console.log("Why not Messi");
}

*/

//==== Boolean Logic ====//

//just theory

//==== Logical Operators ====//
/*
const hasDrivingLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);
console.log(!hasDrivingLicense);

// const shouldDrive = hasDrivingLicense && hasGoodVision;

// if(shouldDrive){
//     console.log("Able to Drive");
// }
// else{
//     console.log("Not Able to Drive");
// }

const isTried =  false; //C
// console.log(hasDrivingLicense || hasGoodVision || isTried);


if(hasDrivingLicense && hasGoodVision && !isTried){
    console.log("Able to Drive");
}
else{
    console.log("Not Able to Drive");
}
*/

//=====video no 20 Coding Challenge #1====//

/* QUESTION

Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

*/

/*

//Data 1

const dolphinsAverageData1 =  (96 + 108 + 89)/3;
const koalasAverageData1 = (88 + 91 + 110)/3;

if(dolphinsAverageData1 > koalasAverageData1){
    console.log("Team Dolphin is The Winner with " + dolphinsAverageData1 + " score");
}
else if(koalasAverageData1 > dolphinsAverageData1){
    console.log("Team Koalas is The Winner with " + dolphinsAverageData1 + " score");
}
else{
    console.log("The Match is Draw");
}

//Bonus 1

// const minumumScore = 400;
const dolphinsAverageBonus1 =  (97 + 112 + 101)/3;
const koalasAverageBonus1 = (109 + 95 + 123)/3;

if(dolphinsAverageBonus1 > koalasAverageBonus1 && dolphinsAverageBonus1 >= 100){
    console.log("Team Dolphin is The Winner with " + dolphinsAverageBonus1 + " score");
}
else if(koalasAverageBonus1 > dolphinsAverageBonus1 && koalasAverageBonus1 >= 100){
    console.log("Team Koalas is The Winner with " + koalasAverageBonus1 + " score");
}
else{
    console.log("Not Reach The 100 point");
}


//Bonus 2

const dolphinsAverageBonus2 =  (97 + 112 + 101)/3;
const koalasAverageBonus2 = (109 + 95 + 106)/3;
if(dolphinsAverageBonus2 === koalasAverageBonus2  && dolphinsAverageBonus2 >= 200 && koalasAverageBonus2 >= 200){
    console.log("They Both Win Trophy 👑")
}
else{
    console.log("No one wins😥😥😥");
}


//pass the test

*/

//==== The switch statement ====//




/*
const day = 'sunday';
switch(day){
    case 'monday': /// day === monday strict equality
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
        
    case 'tuesday':
        console.log('Prepare theory videos');
        break;

    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;

        case 'friday':
        console.log('Record videos');
        break;

        case 'saturday':
        case 'sunday':
                console.log('Enjoy weekend');
                break;
            
            default:
                console.log('Not valid day')

}



if(day === 'monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup');
}


else if(day === 'tuesday'){
    console.log('Prepare theory videos');
}

else if(day === 'wednesday' || day === 'thursday'){
    console.log('Write code examples');
}

else if(day === 'friday'){
    console.log('Record videos');
}
else if(day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the day');
}
else{
    console.log('Not valid day');
}
*/

//==== statement and expression ====//
/*
if ( 23 > 10){
    const str = '23 is bigger'; // #Expression = 23 is bigger  which produce a value is an expression in js
                                // #Statement = const str = '23 is bigger';
}

const me = 'istiaq';
console.log(`I'm ${2022-1998} years old ${me}`); //expression = 2022-1998

*/

//==== The conditional operator(Ternary) ====//

// condition ? if part : else part
/*
const age = 24;
age >= 18 ? console.log('I like to play football') :
console.log('I like to play cricket');

const drink = age >= 18 ? 'Play' : 'Study';  //expression
console.log(drink);

const food = 15;

console.log(`I like to eat ${food >= 12 ? 'mejban' : 'kichuri'}`);

*/

//=====video no 24 Coding Challenge #1====//

/* QUESTION

Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉

*/

/*

const bill = 430;



const tip = bill >= 50 && bill <= 300 ? bill*0.15 : (bill*0.2) ;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill+tip}`)

//pass the test

*/

