'use strict';


//======= constructor function and new operator =======\\

/*
const Person = function(firstName,birthYear){

    this.firstName = firstName;
    this.birthYear = birthYear;
    //Never do this inside of a constructor function
    // this.calcAge =  function(){
    //     console.log(2037 - this.birthYear);
    // }

}

const istiaq = new Person('Istiaq',1998);
console.log(istiaq);
console.log(istiaq instanceof Person);
// 1. New {} is created
// 2. function is call , this = {} empty object
// 3. link to prototype
// 4. function auto return {}

const ahmed  = new Person('Ahmed',1994);

console.log(ahmed);

//======= Prototypes =======\\

console.log(Person.prototype);
Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
}

istiaq.calcAge()
// coding challenge 1

const Car = function(make , speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed +=10;
    console.log(`${this.make} is going at ${this.speed} speed`);
};
Car.prototype.break = function(){
    this.speed -=5;
    console.log(`${this.make} is going at ${this.speed} speed`);
};



const bmw = new Car ('BMW',120);
const audi = new Car ('AUDI',100);

bmw.accelerate();
bmw.accelerate();
bmw.break();
bmw.accelerate();

*/

//ES6 class

//class expression

// const PersonCl = class {

// }

//class declaration
class PersonCl {

    constructor(firstName,birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;

    }

    //method will be added to the .prototype property
    calcAge(){
        console.log(2036 - this.birthYear);
    }
    greet(){
        console.log(`hey ${this.firstName}`);
    }
}

const jessi = new PersonCl('Jess',1996);
console.log(jessi);
jessi.calcAge();

// PersonCl.prototype.greet =  function(){
//     console.log(`hey ${this.firstName}`);
// }

jessi.greet();

// 1. classes are not hoisted
// 2. classes are te first-class citizen
// 3. classes are execute in strict mode