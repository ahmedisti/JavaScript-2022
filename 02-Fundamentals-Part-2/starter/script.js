'use strict'; //trun on strict mode

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