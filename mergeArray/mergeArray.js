// Coding challenge #24: Create a function that will merge two arrays and return the result as a new array
function mergeArray(arr1, arr2) {
  var newArray = arr1.concat(arr2);
  return newArray;
}
var food = ["apple", "mango", "orange"];
var cars = ["bmw", "audi", "toyota", "tata"];
console.log(mergeArray(food, cars));
