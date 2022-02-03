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

