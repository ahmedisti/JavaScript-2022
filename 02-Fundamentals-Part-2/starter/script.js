"use strict"; //trun on strict mode

//==== 2-Activate Strict Mode ====\\
/*
let hasDriversLicense = false;

const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('i can drive');

*/

//==== 3-FUNCTIONS ====\\
/*
function logger(){
    console.log('My name is Istiaq');
}
//(invoking,runnig,calling)the function
logger();
logger();
logger();


function fruiteProcessor(apples, oranges){ //function parameter
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`; 
    return(juice); //result of the function
}

const appleJuice = fruiteProcessor(5, 0); //pass the argument to the function perameter 
console.log(appleJuice);

const appleOrangeJuice = fruiteProcessor(2, 4); // capture the value of juice in appleOrangeJuice and then we print it
console.log(appleOrangeJuice); // build in function
const num = Number('5'); // build in function


// we use function to not to repeat which is call DRY in programming Which stands for (don't repeat yourself)

*/

//==== 4-FUNCTIONS DECLARATION VS EXPRESSION====\\

/*

//Function Declaration
function callAge1(birthYear){
    return 2022 - birthYear;
}

const age1 = callAge1(1991); //capture the value

//Function Expression
const callAge2 = function(birthYear){ 

    return 2022 - birthYear;
}

const age2  = callAge2(1992); //capture the value


console.log(age1,age2);//output of the function

*/

//==== 5-ARROW FUNCTIONS ====\\

/*
//Function Expression
const callAge2 = function(birthYear){ 

    return 2022 - birthYear;
}

//Arrow Function

const callAge3 = birthYear => 2022-birthYear;

const age3 = callAge3(1990);
console.log(age3)


const yearsUntillRetire = (birthYear , firstName) => {

    const age  = 2022 -birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntillRetire(1990 , 'Istiaq'));
console.log(yearsUntillRetire(1970 , 'Ahmed'));

*/

//==== 6-FUNCTIONS Calling Other Function ====\\

/*
const cutFruitPieces = function (fruit){
    return fruit * 4;
}

const fruiteProcessor = function (apples, oranges){

    const applePieces = cutFruitPieces(apples);

    const orangePieces = cutFruitPieces(oranges);
    
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange `; 

    return(juice);

}


console.log(fruiteProcessor(2,3))
*/

//==== 7-REVIEWING FUNCTIONS ====\\
/*
const calcAge  = function(birthYear){
    return 2022 - birthYear;
}


const yearsUntillRetire = function (birthYear , firstName)  {

    const age  = calcAge(birthYear);
    const retirement = 65 - age;
    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;//return function immidietly exit
        
    }
    else{
        console.log(`${firstName} has already retire 😆😅😅`);
        return -1; //return function immidietly exit
    }
    
    
}

console.log(yearsUntillRetire(1991 , 'Istiaq'));
console.log(yearsUntillRetire(1960 , 'Ahmed'));
*/

//==== 8 COADING CHALLENGE 1 ====\\

/*
QUESTION

Coding Challenge #1

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDinajpur' and 'avgDhaka'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 44 and 44. Koalas score 65, 54 and 54
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 23 and 23

*/

//Solution

/*

const calcAverage = (score1 , score2 , score3) =>(score1+score2+score3)/3

const teamDinajpur = calcAverage(85,54,44);
const teamDhaka = calcAverage(23,23,23);

console.log(teamDinajpur,teamDhaka);


const checkWinner = function(avgDinajpur , avgDhaka){

    if(avgDinajpur >= 2*avgDhaka){

        console.log(`Dinajpur Wins (${avgDinajpur} VS ${avgDhaka})`);
    }
    else if(avgDhaka >= 2*avgDinajpur){
        console.log(`Dhaka Wins (${avgDhaka} VS ${avgDinajpur})`);
    }
    else{
        console.log(`No One Wins`)
    }

}
checkWinner(teamDinajpur,teamDhaka);


//pass the test

*/

//==== 9 Introduction to Array ====\\

/*

const friends = ['Pique', 'Jordi' ,'Gavi', 'Torres'];
console.log(friends);

const year = new Array(1991.1992,1993);


console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[1] = 'Nico';
console.log(friends)
// friends = ['a','b'] //can't done

const firstName = 'Istiaq';
const istiaq = [firstName, 'Ahmed', 2037-1991, 'Intern', friends];
console.log(istiaq);


// Excercise

const calcAge = function(birthYear){
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[years.length-1]);

console.log(age1,age2,age3);

const ages = [calcAge(years[0]),calcAge(years[1]) ,calcAge(years[years.length-1])];
console.log(ages);

*/

//==== 10 Array Operation ====\\
/*
const friends = ['Pique', 'Jordi' ,'Gavi', 'Torres'];
//ADD Element
const newLength = friends.push('Halland');
console.log(friends);
console.log(newLength);

friends.unshift('Fati');
console.log(friends);

//Remove Element
friends.pop();
const poped = friends.pop();
console.log(poped)
console.log(friends);

friends.shift();
console.log(friends);

friends.push(23)
console.log(friends.indexOf('Jordi'));
console.log(friends.indexOf('Ramos'));

console.log(friends.includes('Messi'));//include follow strict equality
console.log(friends.includes(23));


if(friends.includes('Neymar')){
    console.log('Neymar is playing for FC BARCELONA');
}
else{
    console.log('Neymar is playing for PSG');
}


*/

//==== 11 COADING CHALLENGE 2 ====\\

/*
QUESTION

Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44


*/

//Solution

/*

const calcTip = function(bill){

    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

    // if(bill >= 50 && bill <= 300){
    //     return bill * 0.15;
    // }
    // else{
    //     return bill * 0.20;
    // }
}

const desireTip = calcTip(40);
console.log(desireTip);

const bills = [125, 555, 44]



const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

console.log(tips)

const total =[calcTip(bills[0])+bills[0],calcTip(bills[1])+bills[1],calcTip(bills[2])+bills[2]];

console.log(total);

//pass the test

*/

//==== 12 INTRODUCTION TO OBJECTS ====\\

/*

const istiaq = {  //object literal syntex
    firstName : 'Istiaq',
    lastName : 'Ahmed',
    age : 2037 - 1991,
    job : 'Intern',
    friends : ['a','b','c','d']
}

*/

//==== 13 DOT VS BRACKET ====\\
/*
const istiaq = {  //object literal syntex
    firstName : 'Istiaq',
    lastName : 'Ahmed',
    age : 2037 - 1991,
    job : 'Intern',
    friends : ['Neymar','Ronaldo','Fati','Messi']
}

console.log(istiaq.lastName,istiaq.firstName) // . notation
console.log(istiaq['lastName']) // [] notation

const namekey = 'Name';
console.log(istiaq['first' + namekey]);
console.log(istiaq['last' + namekey]);

// const interestedIn = prompt('What do you want o know about Istiaq? Choose between firstName, lastName, age, job and friends');



// if(istiaq[interestedIn]){
//     console.log(istiaq[interestedIn]);

// }
// else{
//     console.log('Wrong Request! Choose between firstName, lastName, age, job and friends ')
// }


//add property to object

istiaq.location = 'Dhaka';
istiaq['facebook'] = 'Ahmed Istiaq';
console.log(istiaq);

//challenge
//Istiaq has 3 friend and his best friend is called Messi
console.log(istiaq.firstName , 'has', istiaq['friends'].length, 'friends and his best friend is',istiaq.friends[3] )

console.log(`${istiaq.firstName} has ${istiaq.friends.length} friends and his best friend is ${istiaq.friends[3]}`)

*/

//==== 14 OBJECT METHODS ====\\

/*
const istiaq = {  //object literal syntex
    firstName : 'Istiaq',
    lastName : 'Ahmed',
    birthYear : 1991,
    job : 'Intern',
    friends : ['Neymar','Ronaldo','Fati','Messi'],
    hasDriverLicense : true,

    // calcAge : function(birthYear){ //function expression
    //     return 2037 - birthYear;
    // }

    //new version
    // calcAge : function(){ //function expression
    //     console.log(this) // this is pointing to the istiaq object 
    //     return 2037 - this.birthYear;
    // }
    calcAge : function(){  
        
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary : function(){
        
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} , and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
        

    }
};


// console.log (istiaq.calcAge(1991));
// console.log(istiaq['calcAge'](1990));

// console.log(istiaq.calcAge());
// console.log(istiaq.age);
// console.log(istiaq.age);
// console.log(istiaq.age);
// console.log(istiaq.age);

//challenge

//Jonas is a 46-year old Intern, and he has a/no driver,s license.

console.log(istiaq.getSummary())

*/

//==== 15 CODING CHALLENGE ====\\

/*

Question

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.

*/

//Solution

/*

const mark = {
    fullName : 'Mark Miller',
    mass : 92,
    height : 1.95,
    calcBMI : function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName : 'John Smith',
    mass : 78,
    height : 1.69,
    calcBMI : function(){
    this.bmi = this.mass / this.height ** 2;
        return  this.bmi;
    }
}


console.log(mark)
console.log(john)

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi)
console.log(john.bmi)


mark.bmi > john.bmi ? console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higer than ${john.fullName}'s (${john.bmi}) `) : console.log(`${john.fullName}'s BMI (${john.bmi}) is higer than ${mark.fullName}'s (${mark.bmi}) `)


console.log()

//pass the test

*/

//==== 16 ITERATION THE FOR LOOP ====\\

// console.log('Lifting weights repetition 1 🦾')
// console.log('Lifting weights repetition 2 🦾')
// console.log('Lifting weights repetition 3 🦾')
// console.log('Lifting weights repetition 4 🦾')
// console.log('Lifting weights repetition 1 🦾')
// console.log('Lifting weights repetition 1 🦾')
// console.log('Lifting weights repetition 1 🦾')
// console.log('Lifting weights repetition 1 🦾')
// console.log('Lifting weights repetition 1 🦾')
// console.log('Lifting weights repetition 1 🦾')

// for(counter;condition;increase counter)

/*
for(let rep = 1; rep <= 10 ; rep++) {

    console.log (`Lifting weights repetition ${rep} 🦾`)
}

*/

//==== 17 LOOPING ARRAYS BREAKING ====\\

// const istiaqArray = [
//     'Istiaq',
//     'Ahmed',
//     2037 - 1991,
//     'Intern',
//     ['Messi', 'Neymar', 'Ronaldo'],
//     true,
//     false
// ];

// const types = [];

// for(let start = 0 ; start <= istiaqArray.length-1; start++){
//     console.log(istiaqArray[start], typeof istiaqArray[start]);

//     // types[start] = typeof istiaqArray[start];

//     types.push(typeof istiaqArray[start]);
// }

// console.log(types);

// const years = [1971, 1991, 1998 , 2002];

// const ages = [];

// for(let i = 0 ; i <= years.length-1; i++){

//     ages.push(2037 - years[i]);
// }
// console.log(ages);

//Continue & Break

/*

const istiaqArray = [
    'Istiaq',
    'Ahmed',
    2037 - 1991,
    'Intern',
    ['Messi', 'Neymar', 'Ronaldo'],
    true,
    false
];

console.log('==Only Strings==')

for(let start = 0 ; start <= istiaqArray.length-1; start++){
    if(typeof istiaqArray[start] !== 'string') continue;

    console.log(istiaqArray[start], typeof istiaqArray[start]);

}

console.log('==Break with Number==')

for(let start = 0 ; start <= istiaqArray.length-1; start++){
    if(typeof istiaqArray[start] === 'number') 
    break;

    console.log(istiaqArray[start], typeof istiaqArray[start]);

}

*/

//==== 18 LOOPING BACKWARDS AND NESTED LOOP ====\\
/*
const istiaq = [
    'Istiaq',
    'Ahmed',
    2037 - 1991,
    'Intern',
    ['Messi', 'Neymar', 'Ronaldo'],
];

for(let i = istiaq.length-1; i >= 0 ; i--){
    console.log(istiaq[i]);
}


for(let excercise = 1 ; excercise <=3 ; excercise++){
    console.log(`----Start Excercise ${excercise}----`);

    for(let rep = 1; rep <=5 ; rep++){
        console.log(` Excercise No : ${excercise} Lifting weight repetition ${rep}`);
    }
}

*/

//==== 19 WHILE LOOP ====\\

// console.log(`----------for--------`)
// for(let rep = 1; rep <=10 ; rep++){
//     console.log(`Lifting weight repetition ${rep}`)
// }
/*
console.log(`----------------------------`)
console.log(`----------WHILE--------`)
let rep = 1;
//while this condition is true then it run
while(rep <= 10){ 
    // console.log(`Lifting weight repetition ${rep}`);
    rep++;
}

//math.trunc use for not getting the decimal value

let dice = Math.trunc (Math.random() * 6) + 1;
console.log(dice)


while( dice !== 6){
    console.log(`You Rolled a ${dice}`);
    dice = Math.trunc (Math.random() * 6) + 1;
    

dice === 6 ? console.log(`OH You Got ${dice} Loops end here`): ''
    
}

*/

//==== 20 CODING CHALLANGE 4 ====\\

/*
QUESTION

Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array

*/

//Solution

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];

const totals = [];

for (let i = 0; i <= bills.length - 1; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(`Bills : ${bills} 
Tips : ${tips} 
Totals : ${totals}`);

console.log("---------Bonus Part--------");

//My solution

const calcAverage = function (arr) {
  return (arr = arr / values.length);
};

let sum = 0;
let average;

const values = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let j = 0; j <= values.length - 1; j++) {
  sum = sum + values[j];
  average = calcAverage(sum);
}
console.log(`Sum of total number : ${sum}`, `Average of the Sum : ${average}`);



//pass the






//developer setting 
