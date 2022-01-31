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
/*
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
*/
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


/*
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]

*/

//solution

//===Understand the problem===//
// - array transformed into string , separeted by ...
// -what is the x days? curret index+1


//===Break into sub-problem===//
//-transform the array into string
// - transform element to string to °c
// string need to contain the days = current-index[] + 1
// add ... between element and start and end of string

/*
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];


const printForecast = function(arr){

  let str = '';

  for(let i = 0; i < arr.length; i++){

    str += `${arr[i]}°C in ${i + 1} days ... `
  }
  console.log('... ' + str);
};

printForecast(data2);

*/

// A lot of hardwork needed;
