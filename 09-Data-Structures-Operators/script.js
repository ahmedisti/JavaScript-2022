'use strict';



// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'web', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literal
  openingHours,

  // ES6 the :Function does not have to be written
  order(starterIndex, mainIndex) {
    // it is a function
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    // it is a function
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    // it is a function
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIng, ...otherIng) {
    // it is a function
    console.log(mainIng, otherIng);
  },
};
////////////////////////////////////////////////////
////////-------MAPS Iteration-------/////////

// const question = new Map([
//   ['question','what is the best programming language'],
//   [1,'c'],
//   [2,'java'],
//   [3,'JavaScript'],
//   ['correct',3],
//   [true,'Correct 😍'],
//   [false,'Try Again'],
// ]);

// console.log(question);

// convert object to map
// console.log(Object.entries(openingHours));

// const hourMap = new Map(Object.entries(openingHours));
// console.log(hourMap);

//Quiz app
// const question = new Map([
//   ['question','what is the best programming language'],
//   [1,'c'],
//   [2,'java'],
//   [3,'JavaScript'],
//   ['correct',3],
//   [true,'Correct 😍'],
//   [false,'Try Again'],
// ]);

// console.log(question.get('question'));
// for(const [key,value] of question){

//   if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your Answer'));

// console.log(question.get(question.get('correct') === answer));

// // convert map to array

// console.log([...question]);
// console.log(question.entries());
// console.log(question.values());
// console.log(question.key());

///////////////////////////////////////////////////
////////-------MAPS Fundamentals-------/////////

// const rest = new Map();

// rest.set('name','Deshi Shad');

// rest.set(1,'Dhaka');
// rest.set(2,'Dnj');
// console.log(rest);

// rest
// .set('catagories',['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'])
// .set('open',11)
// .set('close',23)
// .set(true,'We are open')
// .set(false,'We are close');
// console.log(rest);

// console.log(rest.get('name'));
// // console.log(rest.get(true));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('catagories'));
// rest.delete(2);
// // rest.clear();
// const arr = [1,2];
// rest.set(arr,'test');

// rest.set(document.querySelector('h1'),'this is the heading')
// console.log(rest);

// console.log(rest.size);

// console.log(rest.get(arr));

////////////////////////////////////////////////////
// SETS

// const orderSet = new Set([
//   'pasta',
//   'pizza',
//   'pizza',
//   'polao',
//   'pasta',
// ]);
// console.log(orderSet);
// console.log(new Set('ISTIAQ'));

// console.log(orderSet.size);
// console.log(orderSet.has('pizza'));
// console.log(orderSet.has('murgi'));
// orderSet.add('goru');
// orderSet.add('goru')
// console.log(orderSet);
// orderSet.delete('polao')
// // orderSet.clear();

// console.log(orderSet);

// for(const order of orderSet)
// console.log(order);

// const staff = ['waiter','chef','manager','waiter','chef','waiter',];

// const staffUnique = [...new Set(staff)] // to store the value in the array
// console.log(staffUnique);
// console.log(new Set('Istiaqahmed').size); //how many different letters in my name

////////////////////////////////////////////////////
// Looping objects objects keys values & entries

// //property names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `we are open on ${properties.length} days : `;

// for(const day of Object.keys(openingHours)){
//   openStr += `${day} , `
// }
// console.log(openStr);

// //property values

// const values = Object.values(openingHours);
// console.log(values);

// //entries = properties+value together

// const entries = Object.entries(openingHours);
// console.log(entries);

// for(const [day,{open,close}] of entries){
//   console.log(`On ${day} we open at ${open} and close at ${close} `);
// }

///////////////////////////////////////////////////
// Optional Chaining

// if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// // if(restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// // Optional Chaining implementn (?.)

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);
// console.log(restaurant.openingHours?.fri?.open);

// const days = ['mon','tue','web','thu','fri','sat','sun'];

// for(const day of days){
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist' );
// console.log(restaurant.orderPolao?.(0,1) ?? 'Method does not exist' );

// // Arrays

// const user = [
//   // {
//   //   name: 'isti',
//   //   mail: 'None',
//   //   age: 20,
//   // }
// ];

// console.log(user[0]?.name ?? 'User Is Empty'); // the alternative way is given below

// if(user.length > 0) console.log(user[0].name);
// else console.log('user is empty');

/////////////////////////////////////////////////////////
// Looping Array The for of loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for( const [i,el] of menu.entries()){ //destructure here
//   console.log(`${i + 1}: ${el}`);
// }

// console.log(...menu.entries());

////////////////////////
// The Nullish Coalescing operator
// restaurant.numGuests = 0;

// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish value =  null and undefined (Not 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

///////////////////////////////////////////////////////
// Short Circuiting

// console.log('------OR------');

// //use any data type, return any data type , short-circuiting

// console.log(3 || 'Istiaq');
// console.log('' || 'Istiaq');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// // false || false || false || true || true || true

// restaurant.numGuests = 23;

// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;

// console.log(guest1);

// // short-circuiting way

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log('------AND------');

// // The AND operator short-circuit when the first value is falsy and immidiently return the falsy value

// console.log(0 && 'Isti');

// console.log(7 && 'Istiaq');
// console.log(7 && 'Istiaq' && null && 'Ahmed');

// if(restaurant.orderPizza){
//   restaurant.orderPizza('mushroom','spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushroom','spinach');

//////////////////////////////////////////////////////
// Rest pattern and parameters

// // 1st part Destructuring
// const arr = [1,2, ...[3,4]]; // SPREAD beacuse on the right side of =

// const [a,b, ...others] = [1,2,3,4,5] // REST beacuse on left side of =

// console.log(a,b,others);

// // arrays
// const [Pizza, ,Risotto,...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu]

// console.log(Pizza,Risotto,otherFood);

// // objects

// const{sat,...otherDays} = restaurant.openingHours;

// console.log(otherDays);

// // 2nd part Function

// const add =  function(...numbers){
// let sum = 0;
// for(let i = 0;i<numbers.length;i++) sum += numbers[i];
// console.log(sum);
// }

// add(2,3)
// add(1,2,3,4,5)
// add(1,2,3,4,5,6,7,8,9)

// const x = [23,7,10];

// add(...x);

// restaurant.orderPizza('Mushrums','onions', 'olives', 'spinach');

//////////////////////////////////////////////////////
// The Spread operator

// const arr = [7,8,9];
// const badNewArr = [1,2,arr[0],arr[1],arr[2]];
// console.log(badNewArr);

// const newArr = [1,2, ...arr];
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu,'Polao'];
// console.log(newMenu);

// //copy array

// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // join two array

// const menuJoin = [...mainMenuCopy, ...newMenu];
// console.log(menuJoin);

// // Iterables : arrays , strings, maps, sets, not object

// const str = 'Istiaq';

// const letters = [...str,'','A.'];
// console.log(letters);

// can't use this in template literal

// const ingridients  = [prompt('Let\'s make pasta! Ingridient 1?'),prompt('Let\'s make pasta! Ingridient 2?'),prompt('Let\'s make pasta! Ingridient 3?')]

// restaurant.orderPasta(...ingridients);

//objects

// const newRestaurent = {foundYear : 2020,...restaurant,founder:'istiaq'};

// console.log(newRestaurent);

// copy objects

// const restaurantCopy = {...restaurant};

// restaurantCopy.name = 'Desi Shad';

// console.log(restaurantCopy);

/////////////////////////////////////////////////////////
// restaurant.orderDelivery({
//   time : '10:30',
//   address: 'Dinajpur',
//   mainIndex : 2,
//   starterIndex : 2,
// });

// the object will use the default value that has benn assign to the object
// restaurant.orderDelivery({
//   address: 'Dhaka',
//   starterIndex : 1,
// });

// destructuring objects
// have to use the main object name to access the data
// const {name, openingHours, categories} = restaurant;
// console.log(name,openingHours,categories);

// const{
//   name:restaurantName,
//   openingHours: hours,
//   categories:tags
// } = restaurant;
// console.log(restaurantName,hours,tags);

// // default values
// const{
//   menu = [],
//   starterMenu : starters = []
// } = restaurant;
// console.log(menu,starters);

// mutating cariables
// let a = 111;
// let b = 999;

// const obj = {a : 12,
// b : 7,
// c : 14};
// ({a,b} = obj);
// console.log(a,b);

// nested objects

// const{
//   fri: {open:o,close:c}
// } = openingHours;
// console.log(o,c);

//////////////////////////////////////////////////
// destructuring arrays
// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const[x,y,z] = arr;

// console.log(x,y,z);

// let [main, ,secondary] = restaurant.categories;
// console.log(main,secondary);

//switchinging varibales

//const temp = main;

// main = secondary;
// secondary = temp;

// console.log(main,secondary);

// [main,secondary] = [secondary, main]
// console.log(main,secondary);

// // receive 2 return value from a function
// const[starter,mainCourse] = restaurant.order(2,0)
// console.log(starter,mainCourse);

// nested destructuring
// const nested = [2,4, [5,6]];

// // const[i, ,j] = nested;
// // console.log(i,j);

// const [i, , [j,k]] = nested;

// console.log(i,j,k);

// //default values

// const [p = 1,q = 1,r = 1] = [8,9];
// console.log(p,q,r);

///////==========COADING CHALLENGE 1==========\\\\\\\

// QUESTION:

/*
We're building a football betting app (soccer for my American friends )!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored

*/

// SOLUTION \\

/*
const game = {
  team1 : 'Bayern Munich',
  team2 : 'Borrussia Dortmund',
  players : [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Gozetzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Reus',
    ]
  ],
  score : '4:0',
  scored : ['Lewandowski','Gnarby','Lewandowski','Hummels'],
  date : 'Nov 9th, 2037',
  odds: {
    team1:1.33,
    x : 3.25,
    team2 : 6.5,
  }
}

// 1.
const [players1,players2] = game.players;
console.log(players1,players2);


// 2.

const[gk,...fieldPlayers] = players1;
console.log(gk,fieldPlayers);

// 3.

const allPlayers = [...players1,...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1,'Thiago','Coutinho','Periscic'];
console.log(players1Final);

// 5.

const {
  odds:{team1, x: draw, team2}
} = game;
console.log(team1,draw,team2);

// 6.

const printGoals = function(...players){

  console.log(`${players.length} goals are scored`);

}

// printGoals('Lewandowski','Gnarby','Lewandowski','Hummels')
// printGoals('Davis','Muller');
printGoals(...game.scored)

// 7.

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 ?? console.log('Team 2 is more likely to win');

*/

///////==========COADING CHALLENGE 2==========\\\\\\\

// QUESTION:

/*
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}

*/

//SOLUTION
/*
const game = {
  team1 : 'Bayern Munich',
  team2 : 'Borrussia Dortmund',
  players : [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Gozetzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Reus',
    ]
  ],
  score : '4:0',
  scored : ['Lewandowski','Gnarby','Lewandowski','Hummels'],
  date : 'Nov 9th, 2037',
  odds: {
    team1:1.33,
    x : 3.25,
    team2 : 6.5,
  }
}

// 1.



for(const [i,player] of game.scored.entries()){
  console.log(`Goal ${i+1}: ${player} `);
}

// 2.

let average = 0;
const odds = Object.values(game.odds)

for(const odd of odds)

  average += odd;
  average /= odds.length;
  console.log(average);

  // 3.

  for(const [team,odd] of Object.entries(game.odds)){
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
    console.log(`Odd of ${teamStr}: ${odd}`);
  }

//Odd of victory Bayern Munich: 1.33
//Odd of draw: 3.25
//Odd of victory Borrussia Dortmund: 6.5


*/

///////==========COADING CHALLENGE 3==========\\\\\\\

// QUESTION:

/*
Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17:
⚽
GOAL

*/

// SOLUTION
/*
const gameEvents = new Map([
[17, '⚽ GOAL'],
[36, '🔁 Substitution'],
[47, '⚽ GOAL'],
[61, '🔁 Substitution'],
[64, '🔶 Yellow card'],
[69, '🔴 Red card'],
[70, '🔁 Substitution'],
[72, '🔁 Substitution'],
[76, '⚽ GOAL'],
[80, '⚽ GOAL'],
[92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.

gameEvents.delete(64);

// 3.
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on
average, every ${time / gameEvents.size} minutes`);

// 4.

for(const [minute,event] of gameEvents){

  const eventValue = minute <=45 ? 'FIRST' : 'SECOND';
  console.log(`[${eventValue} HALF] ${minute}: ${event}`);
}

*/

//============================================\\

//============Working With Strings Part-1==============\\
/*
const airline = 'Biman Bangladesh';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B723'.length);


//string method

console.log(airline.indexOf('d'));

console.log(airline.indexOf('bangladesh'));

console.log(airline.slice(6));

console.log(airline.slice(0,airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+1));
console.log(airline.slice(-5));
console.log(airline.slice(1,-1));

const checkMiddleSeat =  function(seat){

  // B and E are middle sit

  const s = seat.slice(-1);

  if(s === 'B' || s === 'E'){
    console.log(`${seat}: You got the middle seat `);
  }
  else{
    console.log(`${seat}: You didn't got the middle seat `);
  }
  
}

checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')


*/

//============Working With Strings Part-2==============\\
/*
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('istiaq'.toUpperCase());

// fix captialization in name


const passenger = function(passengerName){
  const passengerLower = passengerName.toLowerCase();
  const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
  console.log(passengerCorrect);
}

passenger('iStiAQ'); // Istiaq

// comparing email

const email = 'hello@istiaq.io';
// const lowerEmail = loginEmail.toLowerCase();
// console.log(lowerEmail);
// const trimEmail = lowerEmail.trim();
// console.log(trimEmail);
const normalEmail = emailcorrect => {
const loginEmail  = emailcorrect.toLowerCase().trim();
console.log(email === loginEmail);
}
normalEmail('   Hello@Istiaq.Io \n')


// Replacing

const priceGB = '288,97£';
const priceUS = priceGB.replace('£','$').replace(',','.');
console.log(priceUS); 

const announcement = 'All the passenger come to the boarding door 23. Boarding door 23.'
console.log(announcement.replaceAll('door','gate')); // ('The value we want to replace','the value we want to replace with')


// Booleans 

const plane = 'Airbus A320neo';
console.log(plane.includes('A32'));
console.log(plane.startsWith('Air'));
console.log(plane.endsWith('o'));

if(plane.startsWith('Airbus') && plane.endsWith('neo')){
  console.log('Part of New Airbus family');
}

// Practice excercise

const checkBagage = function(item){

  const bagage = item.toLowerCase();
  if(bagage.includes('knife') || bagage.includes('gun')){
    console.log('You can not aboard');
  }
  else{
    console.log('You can aboard');
  }
}

checkBagage('I have a laptop, some food and a pocket Knife');

checkBagage('I have some socks and camera');
checkBagage('Got some snacks and a gun for protection');

*/

//============Working With Strings Part-3==============\\
/*
//split and join method
console.log('a+very+nice+string'.split('+'));
console.log('Istiaq Ahmed'.split(' '));
const [firstName, lastName] = 'Istiaq Ahmed'.split(' ');

const newName = ['Md.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const captializeName = name => {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

captializeName('jessica ann smith davis');
captializeName('istiaq ahmed');

// padding

const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log(message.padEnd(25, '+'));

const maskCreditCard = number => {
  const str = number + ''; //convery the number into string
  const last = str.slice(-4);
  const encriptCardNum = last.padStart(str.length, '*');
  console.log(encriptCardNum);
};

maskCreditCard(12345678912345);
maskCreditCard('987654321987654321');

// repeat method

const message2 = 'Bad Weather... All Departures Delayed...';

console.log(message2.repeat(5));

const planeInLine = n =>{
  console.log(`There are ${n} planes in line ${'✈ '.repeat(n)}`);
}

planeInLine(10);
planeInLine(5);
planeInLine(3);

*/

///////==========COADING CHALLENGE 4==========\\\\\\\

// QUESTION:

/*
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case

*/

// Solution:
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector('textarea').value;


document.querySelector('button').addEventListener('click',function(){
  const text = document.querySelector('textarea').value;
  // console.log(text);
  const rows = text.split('\n');
  // console.log(rows);
  for(const [i,row] of rows.entries()){
    const [firsrRow,secondRow] = row.toLowerCase().trim().split('_');
    
    const output = `${firsrRow}${secondRow.replace(
      secondRow[0],
      secondRow[0].toUpperCase()
      )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i+1)}`);
  }
});

*/

// String Method Practice 

// Data needed for  exercise

/*
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  const getCode = str => {
    return str.slice(0,3).toUpperCase();
  }

  for(const flight of flights.split('+')){

    const[type,from,to,time] = flight.split(';');

    const output = `${type.startsWith('_Delayed')? '🔴': ' '}${type.replaceAll('_','')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':','h')})`.padStart(45);
    console.log(output);
  }

  */

