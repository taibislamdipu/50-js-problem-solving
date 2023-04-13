// Here is the three numbers: 5, 10, 15. Find the largest number out of three numbers using Conditional Statement.
const numbers = [5, 10, 20, 15];
let max = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);
