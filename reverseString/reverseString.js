"use strict";
// #23: Reverse a string
function reverseString(string) {
    let splitString = string.split("");
    let reversedString = splitString.reverse();
    let joinArray = reversedString.join("");
    return joinArray;
}
console.log(reverseString("hello world"));
