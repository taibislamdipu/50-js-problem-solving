// #17: Calculate the sum of digits of a positive integer number
let intDigits = [];

function sumPositiveIntegerDigits(n) {
  const digits = n.toString().split("");
  digits.map((digit) => intDigits.push(parseInt(digit)));
  const sum = intDigits.reduce((cur, digit) => cur + digit);
  return sum;
}

console.log(sumPositiveIntegerDigits(10134));
