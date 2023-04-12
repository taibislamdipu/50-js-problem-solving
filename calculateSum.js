// #5: Calculate the sum of numbers from 1 to 10

// solution 1
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log(sum);

// solution 2
const sum = numbers.reduce((sum, curr) => sum + curr, 0);
console.log(sum);
