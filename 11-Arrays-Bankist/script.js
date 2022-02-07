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
  owner: 'Istiaq Ahmed',
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

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
  <div class="movements__value">${mov}</div>
</div>
`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);


// to create user name using for each and map method

const createUserNames = function (accs) {

  accs.forEach(function(acc){

    acc.userName = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  })
  
};
createUserNames(accounts);
console.log(accounts);

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

// ========== CODING CHALLENGE 1 ========== \\
//QUESTION
/*
Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
🐶
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉
*/

//SOLUTION

/*
const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];

const juliaDataCopy = juliaData.slice();
const kateDataCopy = kateData.slice();

juliaDataCopy.splice(0,1);
juliaDataCopy.splice(-2);

const checkDogs =  function(dogsJulia,dogsKate){
  console.log(`==========Julia List==========`);
  dogsJulia.forEach(function(age,num){
    if(age > 3){
      console.log(`Dog number ${num + 1} is an adult, and is ${age} years old`);
    }
    else{
      console.log(`Dog number ${num + 1} is still a puppy`);
    }
  })
  console.log(`==========Kate List==========`);
  dogsKate.forEach(function(age,num){
    if(age > 3){
      console.log(`Dog number ${num + 1} is an adult, and is ${age} years old`);
    }
    else{
      console.log(`Dog number ${num + 1} is still a puppy`);
    }
  })

};

checkDogs(juliaDataCopy,kateDataCopy)

*/

//======== Data Transformation (map,filter,reduce) ========\\

//--------------The Map Method--------------\\

// const movementsAgian = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movementsUsd = movementsAgian.map(function(items){
// //functional programming
//   return items*eurToUsd;
// });
// console.log(movementsAgian);
// console.log(movementsUsd);

// console.log(`=================Arrow Function================`);
// const movementsUsdArrow = movementsAgian.map (item => item*eurToUsd);
// console.log(`Arrow Function ${movementsUsdArrow}`);

// console.log(`=================For Of================`);

// const movementsAgianForOf = [];
// for (const mov of movementsAgian){
//   movementsAgianForOf.push(mov * eurToUsd);
// }
// console.log(movementsAgianForOf);

// const movementDescription = movementsAgian.map((items,indexNum) =>

//   `Movement${indexNum + 1}: You ${items > 0 ? 'deposited' : 'withdrew'} ${Math.abs(items)}:`

//   // items = current element
//   // indexNum =  current index
//   // array =  the total array
//   // always have to follow this sequence

// // map method call the function and return a new array

//   // if(){
//   //   return ;

//   // }
//   // else{
//   //   return `;
//   // }

// )
// console.log(movementDescription);


//--------------The Filter Method--------------\\


// const movementsAgian = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movementsAgian.filter(function(mov){
//   return mov > 0;

// });
// console.log(movementsAgian);
// console.log(deposits);

// const withdrawal = movementsAgian.filter(withdraw => withdraw < 0);
// console.log(withdrawal);

// // Using for of loop for the same secnario
// const depositForPush = []
// for (const mov of movementsAgian) if (mov > 0){ depositForPush.push(mov); 
// }
// console.log(depositForPush);