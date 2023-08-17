"use strict";
let a = 1, b = 2, c = 1;


function solveEquation(a, b, c) {

let arr = [];
  
let d = Math.pow(b, 2)-(4*a*c);

if (d < 0) {
  arr = [];
};

if (d === 0) {
  let xone = -b/(2*a);
  arr = [xone];
};

if (d > 0) {
  let xone = (-b + Math.sqrt(d) )/(2*a);
  let xtwo = (-b - Math.sqrt(d) )/(2*a);
  arr = [xone, xtwo];
};

  return arr;
};

console.log(solveEquation(a, b, c));

//function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
//}
