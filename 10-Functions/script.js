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
