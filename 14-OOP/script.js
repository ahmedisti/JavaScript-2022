'use strict';


//======= constructor function and new operator =======\\

/*
const Person = function(fullName,birthYear){

    this.fullName = fullName;
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

/*
//class declaration
class PersonCl {

    constructor(fullName,birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;

    }

    //method will be added to the .prototype property
    calcAge(){
        console.log(2036 - this.birthYear);
    }
    greet(){
        console.log(`hey ${this.fullName}`);
    }

    get age(){
        return 2037-this.birthYear;
    }
//set a property that already exist
    set fullName(name){
        
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`)
    }

    get fullName(){
        return this._fullName;
    }
}

const jessi = new PersonCl('Jess Dav',1996);
console.log(jessi);
jessi.calcAge();
console.log(jessi.age);

// PersonCl.prototype.greet =  function(){
//     console.log(`hey ${this.fullName}`);
// }

jessi.greet();

const jes = new PersonCl('Jes',1996);

// 1. classes are not hoisted
// 2. classes are te first-class citizen
// 3. classes are execute in strict mode

// setters and getters

const account = {
    owner :'istiaq',
    move : [200,530,120,300],

    get latest(){
        return this.move.slice(-1).pop();
    },

    set latest(mov){
        this.move.push(mov);
    },
}

console.log(account.latest);
account.latest = 50;
console.log(account.move);
*/
// object.create

const PersonProto = {
    calcAge(){
        console.log(2036 - this.birthYear);
    },
};

const isti = Object.create(PersonProto);
console.log(isti);
isti.name = 'Ahmed';
isti.birthYear = 2002;
isti.calcAge();

//coding chllenge 2


class CarCl {
    constructor (make , speed){
    this.make = make;
    this.speed = speed;
}
 

accelerate (){
    this.speed +=10;
    console.log(`${this.make} is going at ${this.speed} speed`);
};
break (){
    this.speed -=5;
    console.log(`${this.make} is going at ${this.speed} speed`);
}

get speedUS(){
return this.speed / 1.6;
}

set speedUS(speed){
    this.speed =  speed * 1.6;
}
}

const ford = new CarCl('FORD',120);
console.log(ford.speedUS)
ford.accelerate();
ford.accelerate();
ford.break();
ford.speedUS = 50;
console.log(ford);


// ES6 classes summery

class Student extends Person{
    university = 'SEU';
    #studyHour = 0;
    #course;
    static numSubjects = 10;
    constructor(fullName,birthYear,startYear,course){
        super(fullName,birthYear);
        this.startYear = startYear;
        this.#course = course;
    }

    introduce(){
        console.log(`I study ${this.course} at ${this.university}`);
    }
    study(h){
        this.#makeCoffe();
        this.#studyHour += h;
    }
    #makeCoffe(){
        return `here is a coffe for you`
    }

    get testScore(){
        return this._testScore;
    }
    set testScore(score){

        this._testScore = score < 20 ? score : 0;

    }
    static printCurriculum(){
        console.log(`There are ${this.numSubjects} subjects`);
    }
}

const student = new Student('Istiaq',2020,2037,'CSE');
