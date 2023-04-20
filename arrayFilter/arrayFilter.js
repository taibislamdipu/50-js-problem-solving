"use strict";
// #26: Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
function filterArray(arr1, arr2) {
    let newArray = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            newArray.push(arr1[i]);
        }
    }
    return newArray;
}
const num1 = [1, 2, 3, 10, 5, 3, 14];
const num2 = [-1, 4, 5, 6, 14];
console.log(filterArray(num1, num2));
// expected output: [ 1, 2, 3, 10, 3 ]
