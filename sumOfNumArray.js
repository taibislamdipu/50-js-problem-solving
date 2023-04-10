// #10: Calculate the sum of numbers in an array of numbers

const numbers = [1, 3, 2, 4, -5, 5];

// solution 1
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);
