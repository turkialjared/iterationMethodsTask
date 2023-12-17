//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
function bigger(x) {
  if (x >= 25) {
    return numbers;
  }
}

console.log(numbers.filter(bigger));

function divide(x) {
  if (x % 5 == 0) {
    return numbers;
  }
}
console.log(numbers.filter(divide));
/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
function p(x) {
  return x * x;
}
console.log(numbers.map(p));

function s(x) {
  return x * 2;
}
console.log(numbers.map(s));
/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
function morethan(x) {
  if (x >= 20) {
    return x * x;
  }
}
let A = numbers.map(morethan);

console.log(A.filter(morethan));

function JJ(x) {
  if (x % 5 == 0) {
    return x * 3;
  }
}

let M = numbers.map(JJ);
console.log(M.filter(JJ));
