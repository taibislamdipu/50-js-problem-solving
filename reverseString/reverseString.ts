// #23: Reverse a string

function reverseString(string: string) {
  let splitString = string.split("");
  let reversedString = splitString.reverse();
  let joinArray = reversedString.join("");
  return joinArray;
}

console.log(reverseString("hello world"));
