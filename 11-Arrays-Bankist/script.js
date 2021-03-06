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

const displayMovements = function (movements,sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a,b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
  <div class="movements__value">${mov}</div>
</div>
`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);

// print total balance

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance}???`;
};

// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  //Calculate IN
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}???`;
  //Calculate OUT
  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}???`;

  //Calculate INTEREST
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((interest, i, array) => {
      // console.log(array);
      return interest >= 1;
    })
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = `${interest}???`;
};

// calcDisplaySummary(account1.movements);

// to create user name using for each and map method

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);

// Function for update the UI

const updateUI = function (acc) {
  //display momements
  displayMovements(acc.movements);

  //display balance
  calcDisplayBalance(acc);

  //display summary
  calcDisplaySummary(acc);
};

// Event handlers for login
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display ui and welcome message

    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    //clear input field
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //update UI
    updateUI(currentAccount);
  }
});

// transfer amount

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();

  console.log(amount, receiverAcc);
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //update UI
    updateUI(currentAccount);
  }
});

//loan amount
btnLoan.addEventListener('click',function(e){

  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1) ){
    //add the movement
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
    inputLoanAmount.value = '';
    inputLoanAmount.blur();


  }
})
//close account


btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );
    console.log(index);

    //delete account
    accounts.splice(index, 1);

    //hide UI
    containerApp.style.opacity = 0;
  }
  inputClosePin.value = inputCloseUsername.value = '';
  inputClosePin.blur();
});

//sort functionality initialy the data are unsorted
let sorted = false;
btnSort.addEventListener('click',function(e){
  e.preventDefault();
  console.log('sort');
  displayMovements(currentAccount.movements,!sorted);
  sorted = !sorted;
})

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

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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
????
")
4. Run the function for both test datasets
Test data:
?? Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
?? Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far ????
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

//--------------The Reduce Method--------------\\

// const movementsAgian = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movementsAgian);

//Accumulator --> SNOWBALL
// const balance = movementsAgian.reduce(function(accumulator,cur,i,arr){
//   console.log(`Interation ${i}: ${accumulator}`);
//   return accumulator + cur;
// },0)

// Arrow function
// const balance = movementsAgian.reduce((accumulator,cur) => accumulator + cur ,0) // accumulator initial value assign as 0
// console.log(balance);

// //for of loop
// let balance2 = 0;
// for(const mov of movementsAgian){
//   balance2 += mov;
// }
// console.log(balance2);

// // max value of the movmentAgain

// const max = movementsAgian.reduce((acc,current) => acc > current ? acc : current, movementsAgian[0] )

// console.log(max);

// ========== CODING CHALLENGE 2 ========== \\
//QUESTION
/*
Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages ????)
4. Run the function for both test datasets
Test data:
?? Data 1: [5, 2, 4, 1, 15, 8, 3]
?? Data 2: [16, 6, 10, 5, 6, 1, 4]
*/

//SOLUTION

/*
const calcAverageHumanAge = age =>{
  const humanAge = age.map((ageValue,indexNum) => ageValue <= 2  ? 2 * ageValue : 16 + (ageValue * 4)
    )
    console.log(humanAge);

  const humanAgeUpdate = humanAge.filter((ages) => ages >= 18
  )


  const humanAgeUpdateAvg = humanAgeUpdate.reduce((acc,current) =>
 (acc += current / humanAgeUpdate.length)
  ,0)
  console.log(`Average is: ${humanAgeUpdateAvg}`);
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

*/

//--------------The Chaining Method--------------\\

//PIPELINE
// const movementsAgian = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;
// const totalDepositeUSD = movementsAgian
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositeUSD);

// ========== CODING CHALLENGE 3 ========== \\
//QUESTION
/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
?? Data 1: [5, 2, 4, 1, 15, 8, 3]
?? Data 2: [16, 6, 10, 5, 6, 1, 4]

*/

//SOLUTION

// const calcAverageHumanAge = age =>{

//   const average = age
//   .map(age => age <= 2  ? 2 * age : 16 + (age * 4))
//   .filter(age => age >= 18)
//   .reduce((acc,current,i,arr) => (acc += current / arr.length)
//    ,0);
//    return average;
// }
// const age1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const age2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(age1,age2);

//--------------The Find Method--------------\\

// const movementsAgian = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWitdrawal = movementsAgian.find(mov => mov < 0);
// // returns the first element of the array that satisfy the condition

// // do not return a new array it returns the element
// console.log(firstWitdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Istiaq Ahmed');
// console.log(account);

// // using for of loop
// for(const accountFor of accounts){
//   if(accountFor.owner === 'Istiaq Ahmed')
//   console.log(accountFor);
// }

//--------------Some & Every--------------\\

// //some
// const movementsAgian = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movementsAgian);
// //check equality
// console.log(movementsAgian.includes(-130));
// //Check condition
// const anyDepo = movementsAgian.some( mov => mov > 1500);
// console.log(anyDepo);

// //every
// //only return true if all the element meet the desire condition
// console.log(movementsAgian.every(mov => mov > 0)); //false
// console.log(account4.movements.every(mov => mov > 0)); //true


// //separate callback

// const depoite = mov => mov > 0;
// console.log(movementsAgian.some(depoite));

//--------------Flat and flatMap Method--------------\\

// //flat
// const arr = [[1,2,3],[4,5,6],7,8]; //nested array

// console.log(arr.flat()); // we get all the arrays in one single array

// const arrDeep = [[[[1],2],3],[4,[5,6]],7,8]; //super nested
// console.log(arrDeep.flat(3)); // the three is the level here

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();

// const allMovementsTotal = allMovements.reduce((acc,mov) => acc + mov,0);
// console.log(allMovementsTotal);
// //using chaining method

// const allMovementsTotalChaining = accounts
// .map(acc => acc.movements)
// .flat()
// .reduce((acc,mov) => acc + mov,0);
// console.log(allMovementsTotalChaining);

// // flatMap flat+map method together

// const allMovementsTotalChaining2 = accounts
// .flatMap(acc => acc.movements) // only goes one level deep
// .reduce((acc,mov) => acc + mov,0);
// console.log(allMovementsTotalChaining2);


//--------------Sorting method--------------\\
//strings
// const owners = ['Pique','Busi','Alves','Gavi'];
// const movementsAgian = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(owners.sort());
// console.log(owners); // mutate the orginal array

// //numbers
// console.log(movementsAgian);
// console.log(movementsAgian.sort()); //sort in the alphabetic way by default

// // return < 0 A,B (KEEP ORDER) a < b
// // return > 0 B,A (SWITCH ORDER) a > b
// //assending
// // movementsAgian.sort((a,b) => {
// //   if(a > b)
// //   return 1;
// //   if(a < b)
// //   return -1;
// // })
// //improve version
// movementsAgian.sort((a,b) => a - b);
// console.log(movementsAgian);
// //desending
// // movementsAgian.sort((a,b) => {

// //   if(a > b)
// //   return -1;
// //   if(a < b)
// //   return 1;
// // })

// //improve version
// movementsAgian.sort((a,b) => b - a);
// console.log(movementsAgian);
// //does not work with mix array like strings and numbers together


//---------More ways to CREATING & FILLING array---------\\
// const arr = [1,2,3,4,5,6,7];

// // empty arrays +  fill method
// const x = new Array(7);
// console.log(x);
// x.fill(0,3,5);
// console.log(x);
// arr.fill(97,3,6);
// console.log(arr);

// //Array.form

// const y = Array.from({length:7},() => 1);
// console.log(y);
// const z = Array.from({length:7},(_,i) => i+1);
// console.log(z);

//--------------ARRAY METHOD PRACTICE--------------\\

// // 1.
// const bankDepositSum = accounts
// .flatMap(acc => acc.movements)
// .filter(mov => mov > 0)
// .reduce((acc,value) => acc + value,0);
// console.log(bankDepositSum);

// // 2.

// // const numDeposite1000 = accounts.flatMap(acc => acc.movements)
// // .filter(mov => mov >= 1000).length;

// const numDeposite1000 = accounts.flatMap(acc => acc.movements)
// // .reduce((count,currentValue) => currentValue >= 1000 ? count + 1 : count,0);
// .reduce((count,currentValue) => currentValue >= 1000 ? ++count : count,0);
// console.log(numDeposite1000);

// //prefixed ++ operator

// let a = 10;
// console.log(++a);
// console.log(a);

// // 3.

// const {deposit,withdraw} = accounts
// .flatMap(acc => acc.movements).reduce((sums,currentValue) => {/* currentValue > 0 ? (sums.deposit += currentValue) : (sums.withdraw += currentValue);
//   */
//  sums[currentValue > 0 ? 'deposit' : 'withdraw'] += currentValue
// return sums;
// }, 
// {deposit:0,withdraw:0});
// console.log(deposit,withdraw);

// // 4.

// // this is a nice title - This Is a Nice Title

// const convertTitleCase = function(title){
//   const exception = ['a','an','the','but','or','on','in','with','is','and'];
//   const capitalization = str => str[0].toUpperCase() + str.slice(1);

//   const titleCase = title
//   .toLowerCase()
//   .split(' ')
//   .map(word => exception.includes(word) ? word : capitalization(word))
//   .join(' ')
//   return capitalization(titleCase);

// };

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with and EXAMPLE'));


// ========== CODING CHALLENGE 4 ========== \\
//QUESTION
/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).
Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Forumla:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) ????
3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!"
5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food
(just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects ????)


Hints:
?? Use many different tools to solve these challenges, you can use the summary
lecture to choose between them ????
?? Being within a range 10% above and below the recommended portion means:
current > (recommended * 0.90) && current < (recommended *
1.10). Basically, the current portion should be between 90% and 110% of the
recommended portion.
*/

//solution

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
//   ];
// // 1.
//   dogs.forEach(dog =>dog.recFood = Math.trunc(dog.weight ** 0.75 * 28));
//   console.log(dogs);

// // 2.

// const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(dogSarah);
// console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? 'much' : little}`);

// // 3.

// const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
// console.log(ownersEatTooMuch);
// const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
// console.log(ownersEatTooLittle);

// // 4.

// // Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!


// console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);
// console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little!`);

// // 5.

// console.log(dogs.some(dog => dog.curFood === dog.recFood));

// // 6.

// // current > (recommended * 0.90) && current < (recommended * 1.10)
// const checkEatOk = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

// console.log(dogs.some(checkEatOk));

// // 7.

// console.log(dogs.filter(checkEatOk));

// // 8.

// const dogsCopySorted = dogs.slice().sort((a,b) => a.recFood - b.recFood);
// console.log(dogsCopySorted);



