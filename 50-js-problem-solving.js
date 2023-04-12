// Not clear - #6: Calculate 10!

// #14: Print the first 10 Fibonacci numbers without recursion

// #17: Calculate the sum of digits of a positive integer number
let intDigits = [];

function sumPositiveIntegerDigits(n) {
  const digits = n.toString().split("");
  digits.map((digit) => intDigits.push(parseInt(digit)));
  const sum = intDigits.reduce((cur, digit) => cur + digit);
  return sum;
}

console.log(sumPositiveIntegerDigits(10134));

// Question :Use the map() method to create a new array that adds 10 to each value of the original array, but only for values that are less than 5.

// solution 1
const originalArray = [1, 6, 2, 7, 3, 8, 4, 9, 5, 10];

const newArray = originalArray.map((value) => {
  if (value < 5) {
    return value + 10;
  } else {
    return value;
  }
});

const newArray = originalArray.map((value) => (value < 5 ? value + 10 : value));

Hints: console.log(newArray); //expected output: [11, 6, 12, 7, 13, 8, 14, 9, 5, 10]

// solution 2
const newArray = [];

for (let i = 0; i < originalArray.length; i++) {
  if (originalArray[i] < 5) {
    newArray.push(originalArray[i] + 10);
  } else {
    newArray.push(originalArray[i]);
  }
}

Hints: console.log(newArray); //expected output: [11, 6, 12, 7, 13, 8, 14, 9, 5, 10]

// #22: Reverse an array

const myArray = [1, 2, 3, 4, 5];

function reverseArray(arr) {
  return arr.reverse();
}

console.log(reverseArray(myArray));

// JavaScript function that takes an array of numbers as input and returns the sum of the squares of all even numbers in the array:

// test data:
// const arr = [1, 2, 3, 4, 5];
// console.log(sumOfSquares(arr));
// expected output: 20

function sumOfSquares(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum = sum + arr[i] ** 2;
    }
  }
  return sum;
}

const arr = [1, 2, 3, 4, 5];
console.log(sumOfSquares(arr));

// Here is the three numbers: 5, 10, 15. Find the largest number out of three numbers using Conditional Statement.
const numbers = [5, 10, 20, 15];
let max = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);
