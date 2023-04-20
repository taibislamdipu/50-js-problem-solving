// ✌ #1. Coding challenge #1: Print numbers from 1 to 10
// ✌ #2. Coding challenge #2: Print the odd numbers less than 100
// ✌ #3: Print the multiplication table with 7
// ✌ #4: Print all the multiplication tables with numbers from 1 to 10
// ✌ #5: Calculate the sum of numbers from 1 to 10
// Skip - #6: Calculate 10!
// ✌ #7: Calculate the sum of odd numbers greater than 10 and less than 30
// ✌ #8: Create a function that will convert from Celsius to Fahrenheit
// ✌ #9: Create a function that will convert from Fahrenheit to Celsius
// ✌ #10: Calculate the sum of numbers in an array of numbers
// ✌ #11: Calculate the average of the numbers in an array of numbers
// ✌ #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers
// ✌ #13: Find the maximum number in an array of numbers
// Skip - #14: Print the first 10 Fibonacci numbers without recursion

// skip - #15: Create a function that will find the nth Fibonacci number using recursion

// ✌ #16: Create a function that will return a Boolean specifying if a number is prime

// ✌ #17: Calculate the sum of digits of a positive integer number

// Coding challenge #18: Print the first 100 prime numbers

// Coding challenge #19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

// Coding challenge #20: Rotate an array to the left 1 position

// Coding challenge #21: Rotate an array to the right 1 position

// ✌ #22: Reverse an array
// ✌ #23: Reverse a string

// ✌ #24: Create a function that will merge two arrays and return the result as a new array

// ✌ #25: Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

// Coding challenge #26: Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

// Coding challenge #27: Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

// Coding challenge #28: Calculate the sum of first 100 prime numbers

// Returns true if number n is prime

// Coding challenge #29: Print the distance between the first 100 prime numbers
printDistances(100);

// Print distances between the first n prime numbers
function printDistances(n) {
  var lastPrime = 2;
  var i = lastPrime + 1;
  var foundPrimes = 1;

  while (foundPrimes < n) {
    if (isPrime(i)) {
      console.log(i - lastPrime, "\t", i, " - ", lastPrime);

      foundPrimes++;
      lastPrime = i;
    }

    i++;
  }
}

// Returns true if number n is prime
function isPrime(n) {
  if (n < 2) return false;

  if (n == 2) return true;

  var maxDiv = Math.sqrt(n);

  for (var i = 2; i <= maxDiv; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// Coding challenge #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
// Solution 1
var n1 = "2909034221912398942349";
var n2 = "1290923909029309499";
var sum = add(n1, n2);

console.log(n1, "\n", n2, "\n", sum);

function add(sNumber1, sNumber2) {
  var s = "";
  var carry = 0;

  var maxSize = Math.max(sNumber1.length, sNumber2.length);

  for (var i = 0; i < maxSize; i++) {
    var digit1 = digitFromRight(sNumber1, i);
    var digit2 = digitFromRight(sNumber2, i);

    var sum = digit1 + digit2 + carry;
    var digitSum = sum % 10;
    carry = sum >= 10 ? 1 : 0;

    s = digitSum.toString() + s;
  }

  if (carry > 0) s = carry + s;

  return s;
}

function digitFromRight(s, digitNo) {
  if (digitNo >= s.length) return 0;

  var char = s[s.length - 1 - digitNo];
  return parseInt(char);
}

// Solution 2

var n1 = "2909034221912398942349";
var n2 = "1290923909029309499";
var sum = add(n1, n2);

console.log(n1);
console.log(n2);
console.log(sum);

function add(sNumber1, sNumber2) {
  var maxSize = Math.max(sNumber1.length, sNumber2.length);

  var s1 = sNumber1.padStart(maxSize, "0");
  var s2 = sNumber2.padStart(maxSize, "0");

  var s = "";
  var carry = 0;

  for (var i = maxSize - 1; i >= 0; i--) {
    var digit1 = parseInt(s1[i]);
    var digit2 = parseInt(s2[i]);

    var sum = digit1 + digit2 + carry;
    var digitSum = sum % 10;
    carry = sum >= 10 ? 1 : 0;

    s = digitSum.toString() + s;
  }

  if (carry > 0) s = carry + s;

  return s;
}

// Coding challenge #31a. Create a function that will return the number of words in a text
// Solution 1
function countWords(text) {
  var wasSeparator = true;
  var words = 0;

  for (var c of text) {
    // if current character is separator then advance and
    // set that the previous character was separator
    if (isSeparator(c)) {
      wasSeparator = true;
      continue;
    }

    // if current character is not separator
    // ... but if previous was separator...
    if (wasSeparator) {
      words++;
      wasSeparator = false;
    }
  }

  return words;
}

function isSeparator(c) {
  var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
  return separators.includes(c);
}

console.log(countWords(""));
console.log(countWords("            "));
console.log(countWords("JavaScript!!!   "));
console.log(countWords("     JavaScript"));
console.log(countWords("    JavaScript is cool      "));
console.log(countWords("I like to learn JavaScript with Lead Educare"));

// Solution 2

function countWords(text) {
  var words = 0;

  if (text.length > 0 && !isSeparator(text[0])) words++;

  for (var i = 1; i < text.length; i++) {
    var currChr = text[i];
    var prevChr = text[i - 1];

    if (!isSeparator(currChr) && isSeparator(prevChr)) {
      words++;
    }
  }

  return words;
}

function isSeparator(c) {
  var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
  return separators.includes(c);
}

console.log(countWords(""));
console.log(countWords("            "));
console.log(countWords("JavaScript!!!   "));
console.log(countWords("     JavaScript"));
console.log(countWords("    JavaScript is cool      "));
console.log(countWords("I like to learn JavaScript with Lead Educare"));

// Coding challenge #32. Create a function that will capitalize the first letter of each word in a text

// Coding challenge #33. Calculate the sum of numbers received in a comma delimited string

// Coding challenge #34. Create a function that will return an array with words inside a text

// Coding challenge #35. Create a function to convert a CSV text to a “bi-dimensional” array

// Coding challenge #36. Create a function that converts a string to an array of characters

// Coding challenge #37. Create a function that will convert a string in an array containing the ASCII codes of each character

// Coding challenge #38. Create a function that will convert an array containing ASCII codes in a string

// Coding challenge #39. Implement the Caesar cypher

// Decrypt a message by using the same encrypt function
// ... but using the inverse of the key (e.g. rotate in the other direction)
function decrypt(msg, key) {
  return encrypt(msg, key * -1);
}

// Function will implement Caesar Cipher to
// encrypt / decrypt the msg by shifting the letters
// of the message acording to the key
function encrypt(msg, key) {
  var encMsg = "";

  for (var i = 0; i < msg.length; i++) {
    var code = msg.charCodeAt(i);

    // Encrypt only letters in 'A' ... 'Z' interval
    if (code >= 65 && code <= 65 + 26 - 1) {
      code -= 65;
      code = mod(code + key, 26);
      code += 65;
    }

    encMsg += String.fromCharCode(code);
  }

  return encMsg;
}

// Modulo function: n mod p
function mod(n, p) {
  if (n < 0) n = p - (Math.abs(n) % p);

  return n % p;
}

// Coding challenge #40. Implement the bubble sort algorithm for an array of numbers

// Coding challenge #41. Create a function to calculate the distance between two points defined by their x, y coordinates

// Coding challenge #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting

// Calculate the distance between the two specified points

// Coding challenge 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number

// Coding challenge #44. Create a function that will convert a string containing a binary number into a number

// Coding challenge #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)

// Coding challenge #46-a. Find the maximum number in a jagged array of numbers or array of numbers

// Use a stack to find the maximum numeric value in an array of arrays

// Coding challenge #47. Deep copy a jagged array with numbers or other arrays in a new array

// Coding challenge #48. Create a function to return the longest word(s) in a string

// Get only the elements from specified positions from the array

// Returns an array with the words from specified text

// Coding challenge #49. Shuffle an array of strings

// Shuffle array implemented using Fisher–Yates shuffle algorithm

// Get a random int between min and max (both included)

// Coding challenge #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.

// Shuffle array implemented using Fisher–Yates shuffle algorithm

// Get a random int between min and max (both included)

// Coding challenge #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.

// Coding challenge #52. Calculate Fibonacci(500) with high precision (all decimals)

// Coding challenge #53. Calculate 70! with high precision (all digits)
console.log(factorial(70));

// Calculate factorial(n) ... using big number calculations
function factorial(n) {
  var prod = "1";

  for (var i = 2; i <= n; i++) {
    prod = mult(prod, i.toString());
  }

  return prod;
}

// Multiplies sNumber1 * sNumber2
// Each number is provided as string
function mult(sNumber1, sNumber2) {
  // Calculate partial results according to multiplication algorithm
  var partialResults = [];

  for (var i = sNumber2.length - 1; i >= 0; i--) {
    var digit = parseInt(sNumber2[i]);

    var partialResult = multDigit(sNumber1, digit);
    partialResult += "0".repeat(partialResults.length);

    partialResults.push(partialResult);
  }

  // Sum partial results to obtain the product
  var sum = "";

  for (var r of partialResults) {
    sum = add(sum, r);
  }

  return sum;
}

// Multiplies number sNumber (as string) with a single digit number
function multDigit(sNumber, digit) {
  var p = "";
  var carry = 0;

  for (var i = sNumber.length - 1; i >= 0; i--) {
    var numberDigit = parseInt(sNumber[i]);

    var prod = digit * numberDigit + carry;
    var prodDigit = prod % 10;
    carry = Math.floor(prod / 10);

    p = prodDigit.toString() + p;
  }

  if (carry > 0) p = carry + p;

  return p;
}

function add(sNumber1, sNumber2) {
  var maxSize = Math.max(sNumber1.length, sNumber2.length);

  var s1 = sNumber1.padStart(maxSize, "0");
  var s2 = sNumber2.padStart(maxSize, "0");

  var s = "";
  var carry = 0;

  for (var i = maxSize - 1; i >= 0; i--) {
    var digit1 = parseInt(s1[i]);
    var digit2 = parseInt(s2[i]);

    var sum = digit1 + digit2 + carry;
    var digitSum = sum % 10;
    carry = sum >= 10 ? 1 : 0;

    s = digitSum.toString() + s;
  }

  if (carry > 0) s = carry + s;

  return s;
}

// Returns true if a number is prime
