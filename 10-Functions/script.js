'use strict';


//============= Default Parameters =============\\

/*
const bookings = [];

const createBooking = function(
    flightNum, 
    numPassenger = 1,
    price = 199 * numPassenger
    ){ // ES6 to set default values



    //ES5 way to set default value
    // numPassenger = numPassenger || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassenger,
        price
    }
    console.log(booking);
    bookings.push(booking);

}

createBooking('LH123');
createBooking('LH123',20,2000);
createBooking('AB12',45)
createBooking('BC234',undefined,1000); // when we don't want to pass the numPassenger arguments and set it to default value

*/

//============= Value vs reference =============\\
// const flight = 'LH234';
// const istiaq = {
//     name: 'Istiaq Ahmed',
//     passport: 123456789,
// }

// const checkIn =  function (flightNum,passenger){

//     flightNum = 'LH999';
//     console.log(flightNum);
//     passenger.name = 'Mr.' + passenger.name;

//     if(passenger.passport === 123456789){

//         alert('Check In');
//     }
//     else{
//         alert('Wrong Passport!');
//     }
// }

// checkIn(flight,istiaq);
// console.log(flight);
// console.log(istiaq);


// // it is same as doing...

// const flightNum = flight; // when we pass premetive type to a function it is just as the copy the value
// const passenger = istiaq; // when we pass an object to a function it is just like copy an object whatever we change occur in the copy it will also occur in the orginal



// const newPassport = function(person){
//     person.passport = Math.trunc (Math.random() * 1000000000);
//     console.log(`The istiaq object passport number change which is now ${person.passport}`);

//     // we are manipulating the same object which is --> istiaq

    
// }


// newPassport(istiaq)
// checkIn(flight,istiaq);


//========== First class & Higher order function ==========\\

// First class function
// 1.Js trates func as first class func
// 2. function are simply values
// 3. functions are jusr another "type" of object




// Higher order function
// 1. A func thatb receives another func as an arguments , that returns a new func or both
// 2. this is only possible because of first class func

// 1. func receive another func

// const greet = () => console.log('Hello Istiaq');

// btnClose.addEventListener('click',greet); here eventlistener function is the higher order func because it receives another function as input and here it is the greet function

// addEventListener --> higher order function
// greet --> call back function


//========== Function accepting callback function ==========\\

// const oneWord = function(str){
//     return str.replaceAll(' ','').toLowerCase();
// }
// const upperFirstWord = function(str){
//     const [first,...others] = str.split(' ');
//     return [first.toUpperCase(),...others].join(' ');
// }

// //higher order function
// const transformer = function(str,fn){
//     console.log(`Orginal String: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);


//     console.log(`Transformed by: ${fn.name} <--Function`);
//     console.log('-------------------------------------------');
// }

// transformer('JavaScript is the best',upperFirstWord) // upperFirstWord is the callback func
// transformer('JavaScript is the best',oneWord) // oneWord is the callback func

// // JS uses callback all the time
// const high5 = function(){
//     console.log('✋');
// }

// document.body.addEventListener('click',high5); // here high5 is the callback function and addEventListener is the higher order function


// ['istiaq','ibnul','tashpiq'].forEach(high5);


//========== Function Returning ==========\\

// const greet = function(greeting){

//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }

// }


// const greetHello = greet('Hello'); // here the greetHello is the return function

// greetHello('Istiaq');
// greetHello('Torres');

// greet('Hy')('Ahmed');


// // Arrow function implementation challenge

// const greet1 = greeting1 => name1 =>  console.log(`${greeting1} ${name1}`);
     
// const greetHy = greet1('Salam');

// greetHy('Karim Akka');


//========== The call and apply menthods ==========\\

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     // book: function(){}, // same as below
//     book(flightNum,name){
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//         );

//         this.bookings.push({flight:` ${this.iataCode}${flightNum}`,name})

//     },
// };

// lufthansa.book(239,'Istiaq');
// lufthansa.book(123,'Ahmed');


// const eurowings = {
//     airline:'Eurowings',
//     iataCode:'EW',
//     bookings:[],
// }


// const book = lufthansa.book;

// // does not work
// // book(23,'isti'); not a method it is a regular function call and in regular func the this keyword is undefined

// // The Call Method \\

// book.call(eurowings, 23,'isti'); // allow us to set manually the this keyword we want to point to here we point it to the book method in the lufthansa object
// book.call(lufthansa,123,'Neymar Jr');
// console.log('---------------------------------------');
// console.log(lufthansa);
// console.log('---------------------------------------');
// console.log(eurowings);
// console.log('---------------------------------------');


// const bangla = {
//     airline:'Biman Bangladesh',
//     iataCode: 'BNG',
//     bookings:[]
// }

// book.call(bangla,1971,'Lionel Messi');
// console.log(bangla);


// // the apply method \\

// const flightData = [127,'Ronaldo'];

// book.apply(bangla,flightData); // have to pass the data in an array but does not use in mordern JavaScript

// book.call(bangla,...flightData);

// console.log(bangla);


// // The Bind Method \\

// const bookEW = book.bind(eurowings);
// bookEW(999,'Ferran Torres');

// const bookBNG= book.bind(bangla);
// bookBNG(888,'Ansu Fati');

// const bookBNG2022= book.bind(bangla,2022); // fixed the flight number arguments so when we call the function we basically need to pass the name arguments

// bookBNG2022('Pabolo Gavi')

// // eventListener apply bind method

// lufthansa.planes = 300;

// lufthansa.buyPlane = function(){
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// };

// document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa));


// // Partial Application

// const addTax = (rate,value) => value + value * rate;

// console.log(addTax(0.1,200));

// const addVat = addTax.bind(null,0.23);
// // addVat = value => value + value * 0.23;

// console.log(addVat(100));

// // const greet1 = greeting1 => name1 =>  console.log(`${greeting1} ${name1}`);
     
// // const greetHy = greet1('Salam');

// // greetHy('Karim Akka');

// // practice challenge

// const addTaxBd = vatRate => totalAmt => console.log(`${totalAmt + totalAmt * vatRate}`);

// const addVatBd = addTaxBd(.22);

// addVatBd(100);



//============= COADING CHALLENGE 1 ===============\\

// Questions:

/*
Coding Challenge #1
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?


Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section 😉


*/

//Solution

// const poll = {
//     question: "What is your favourite programming language?",
//     options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//     // This generates [0, 0, 0, 0]. More in the next section!
//     answers: new Array(4).fill(0),
//     registerNewAnswer(){

//         //Get The answer
//         const answer = Number (prompt(`${this.question}\n${this.options.join('\n')}\n(Write Option Number)`)
//         );

//         // register answer
//         typeof answer === 'number'&& answer <this.answers.length && this.answers[answer]++; // we do shortcirting here the number of the answer increase here

//         // console.log(this.answers);
//         this.displayResult();
//         this.displayResult('string');
//     },
//     displayResult(type = 'array'){
//         if(type ===  'array'){
//             console.log(this.answers);
//         }
//         else if(type === 'string'){
//             console.log(`Poll results are : ${this.answers.join(', ')}`);
//         }
//     }
//     };

//     // poll.registerNewAnswer();


//     document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll));
//     poll.displayResult.call({answers: [5,2,3]},'string'); // check line 354


//========== Immediately invoked function expression==========\\

//This function expression just one time

// const runOnce = function(){
//     console.log('This will never run again');
//     const isPrivate = 23;
//     // can't acces outside this scope and it is useful for privacy
// };
// runOnce();
// //IIFE
// (
// function(){
//     console.log('This will never run again');
// })();

// (
//      ()=>{
//         console.log('This arrow will never run once');
//     })();

//     {
//         const isPrivate1 = 23;
//         var notPrivate = 24;
//     };


//========== Closures ==========\\

// const secureBooking = function(){
//     let passengerCount = 0;


//     return function(){
//         passengerCount++;
//         console.log(`${passengerCount} passenger`);
//     }
// }

// const booker = secureBooking();

// booker();
// booker();
// booker();
// console.dir(booker);


//========== More Closures examples ==========\\

// Example 1.

// let f;
// const g = function(){
//     const a = 23;
//     f = function(){
//         console.log(a*2);
//     }
// }
// const h = function(){
//     const b = 777;
//     f = function(){
//         console.log(b*2);
//     }
// }

// g();
// f();
// console.dir(f); // check the variable enviroment 

// //Re-assign f function
// h();
// f();
// console.dir(f); // check the variable enviroment


// // Example 2.

// const boardPassengers = function(n,wait){
// const perGroup = n/3;

// setTimeout(function(){
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups each with ${perGroup} passengers`);
// },wait*1000)

// console.log(`Will start boarding in ${wait} seconds`);
// }

// boardPassengers(180,3);

// setTimeout(function(){
//     console.log('Timer');
// },1000); // it is a callback function


//============= COADING CHALLENGE 2 ===============\\

// Question

/*
This is more of a thinking challenge than a coding challenge 🤓
Your tasks:
1. Take the IIFE below and at the end of the function, attach an event listener that
changes the color of the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element again!
2. And now explain to yourself (or someone around you) why this worked! Take all
the time you need. Think about when exactly the callback function is executed,
and what that means for the variables involved in this example.

*/
//SOLUTION


// (function () {
//     const header = document.querySelector('h1');
//     header.style.color = 'red';
//     document.querySelector('body').addEventListener('click',function(){
//         header.style.color = 'blue';
//     })
//     })();