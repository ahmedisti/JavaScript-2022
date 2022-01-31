'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon','tue','web','thu','fri','sat','sun']
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
  order (starterIndex, mainIndex)  { // it is a function
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ // it is a function
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) { // it is a function
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIng, ...otherIng) { // it is a function
    console.log(mainIng, otherIng);
  },
};
////////////////////////////////////////////////////
// Looping objects objects keys values & entries






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
