"use strict";

//problem 1
// we work for a company building a smart home tempreture. our most recent task is this: "given an array of tempretures of one day" , calculate the tempreture amplitude . keep in mind that sometimes there mighr be a sensor error

// 1. understand the problem

//what is the temp amplitude answer: difference between highest and lowest temp

// how to compute the max and min temp
// what a sensor error? and what to do

// 2. Breaking the pronlem into sub problem

//how to ignore erros
//find max value in temp array
// find min value in temp array
// subtract min from max(amplitude) and return it

const temperatures1 = [3, -2, -6, "error", 9];
const temperatures2 = [13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (t1, t2) {
  const temperatures = t1.concat(t2);
  console.log(temperatures);
  let max = temperatures[0];
  let min = temperatures[0];

  for (let i = 0; i < temperatures.length; i++) {
    const current = temperatures[i];
    if (typeof current !== "number") continue;
    if (current > max) max = current;
    if (current < min) min = current;
  }

  return max - min;
};

const tempAmplitude = calcTempAmplitude(temperatures1, temperatures2);

// max = 3

console.log(tempAmplitude);

//problem 2

//function now should receive two arrays

//solution merge the two arrays

//how to merge two arrays

//solution : use the concate method



// debugging a problem

// const measureKelvin = function(){
//   const measurement = {
//     type : 'Temperature',
//     unit : 'celsius',
//     value : Number(prompt('Degrees celsius')) ,
//   };

//   // console.warn(measurement.value);
//   // console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// }


// console.log(measureKelvin());
