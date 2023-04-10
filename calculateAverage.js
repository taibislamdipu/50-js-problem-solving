// #11: Calculate the average of the numbers in an array of numbers

const numbers = [1, 3, 9, 15, 90];

const total = numbers?.length;
const sum = numbers.reduce((sum, i) => sum + i, 0);
const average = sum / total;

console.log(average);
