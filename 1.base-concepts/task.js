"use strict";
function solveEquation(a, b, c) {

let arr = [];
  
let d = Math.pow(b, 2)-(4*a*c);

if (d < 0) {
  arr = [];
}

if (d === 0) {
  let xone = -b/(2*a);
  arr = [xone];
}

if (d > 0) {
  let xone = (-b + Math.sqrt(d) )/(2*a);
  let xtwo = (-b - Math.sqrt(d) )/(2*a);
  arr = [xone, xtwo];
}

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
let percentMonth =  percent / 100 / 12;
let body = amount - contribution;
let pay = body * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths) - 1)));
let summCredit = pay * countMonths;

return +summCredit.toFixed(2);
}
