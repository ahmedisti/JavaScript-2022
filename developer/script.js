'use strict';

//problem
// we work for a company building a smart home tempreture. our most recent task is this: "given an array of tempretures of one day" , calculate the tempreture amplitude . keep in mind that sometimes there mighr be a sensor error

const temperatures = [3, -2 , -6 ,'error', 9, 13, 17, 15, 14, 9, 5];


// 1. understand the problem

//what is the temp amplitude answer: difference between highest and lowest temp

// how to compute the max and min temp
// what a sensor error? and what to do



// 2. Breaking the pronlem into sub problem

//how to ignore erros
//find max value in temp array
// find min value in temp array
// subtract min from max(amplitude)