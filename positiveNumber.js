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
