// #1: Print numbers from 1 to 10
for (i = 1; i <= 10; i++) {
  console.log(i);
}

// #2: Print the odd numbers less than 100
for (let i = 0; i < 100; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// #3: Print the multiplication table with 7
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

// #4: Print all the multiplication tables with numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(`Multiplication tables of ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// #5: Calculate the sum of numbers from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log(sum);

// Not clear - #6: Calculate 10!

// #7: Calculate the sum of odd numbers greater than 10 and less than 30

let sum = 0;
for (let i = 11; i < 30; i++) {
  if (i % 2 == 1) {
    sum += i;
  }
}

console.log(sum);

// #8: Create a function that will convert from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  if (typeof celsius !== "number") {
    return "Error: Please input a valid number for the temperature in Celsius.";
  } else {
    var fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
  }
}

console.log(celsiusToFahrenheit(10));

// #9: Create a function that will convert from Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  if (typeof fahrenheit !== "number") {
    return "Error: Please input a valid number for the temperature in fahrenheit.";
  } else {
    const celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;
  }
}

console.log(fahrenheitToCelsius(36));

// #10: Calculate the sum of numbers in an array of numbers

const numbers = [1, 3, 2, 4, -5, 5];

// solution 1
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);

// solution 2
const sum = numbers.reduce((sum, curr) => sum + curr, 0);
console.log(sum);

// #11: Calculate the average of the numbers in an array of numbers

const numbers = [1, 3, 9, 15, 90];

const total = numbers?.length;
const sum = numbers.reduce((sum, i) => sum + i, 0);
const average = sum / total;

console.log(average);

// #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers

const onlyPositiveNumbers = [];

function positiveNumber(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] > -1) {
      onlyPositiveNumbers.push(num[i]);
    }
  }
}

const numbers = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
positiveNumber(numbers);
console.log(onlyPositiveNumbers);

// #13: Find the maximum number in an array of numbers

const numbers = [1, 2, 3, 10, 4, 5, -20];

console.log(Math.max(...numbers));

// #14: Print the first 10 Fibonacci numbers without recursion

// #16: Create a function that will return a Boolean specifying if a number is prime

// solution 1
function isPrime(number) {
  if (number <= 0) {
    return false;
  }
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1));

// Solution 2
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(11));

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
