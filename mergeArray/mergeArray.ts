// Coding challenge #24: Create a function that will merge two arrays and return the result as a new array

function mergeArray(arr1: any[], arr2: any[]) {
  const newArray = arr1.concat(arr2);
  return newArray;
}

const food = ["apple", "mango", "orange"];
const cars = ["bmw", "audi", "toyota", "tata"];

console.log(mergeArray(food, cars));
