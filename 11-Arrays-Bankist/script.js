'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


//======== Simple Array Method ========\\

// let arr = ['a','b','c','d','e'];

// //slice method --> does not change the orginal array
// console.log(arr.slice(2)); // does not muted to orginal arr
// console.log(arr.slice(2,4)); // out will form index 2 to 3
// console.log(arr.slice(-1)); // will get the last element
// console.log(arr.slice(1,-2)); // will get the 1 and 2 index the -2 will help to don't get the last 2 values
// console.log(arr.slice()); // to copy the exact same array
// console.log([...arr]); //sprate operaotr will also can make copy of an array

// // Splice method --> it change the orginal array

// // console.log(arr.splice(2)); // it muted the orginal array

// arr.splice(-1) ; // delete the last element of the array
// console.log(arr);
// arr.splice(1,2); // the 1 is the start point and 2 is the number of element we want to delete including the startpoint 
// console.log(arr);

// // reverse


// arr = ['a','b','c','d','e'];

// const arr2 = ['j','i','h','g','f'];

// console.log(arr2.reverse()); // muted the orginal array
// console.log(arr2);

// // contact

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr,...arr2]); //alternative way to concat and does not muted the orginal array


// // join method

// console.log(letters.join(' - '));


//======== Looping Array forEach ========\\

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for of method

// for(const movement of movements)
// for(const [i , movement] of movements.entries()){
//   if(movement>0){
//     console.log(`Movement${i+1}: You deposite ${movement}`);
//   }
//   else{
//     console.log(`Movement${i+1}: You withdraw ${Math.abs(movement)}`);
//   }
// }
// console.log('===============FOR EACH=============');

// // forEach method

// // 1. break statement do not work here

// movements.forEach(function(items,indexNum,array){ 

//   // items = current element
//   // indexNum =  current index
//   // array =  the total array
//   // always have to follow this sequence

//   if(items>0){
//     console.log(`Movement${indexNum+1}: You deposite ${items}`);
    
//   }
//   else{
//     console.log(`Movement${indexNum+1}: You withdraw ${Math.abs(items)}`);
//   }
//   // console.log(array);

// });

// How it work
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ... continue till the last value