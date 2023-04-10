// #23: Reverse a string
function reverseString(string) {
  var splitString = string.split("");
  var reversedString = splitString.reverse();
  var joinArray = reversedString.join("");
  return joinArray;
}
console.log(reverseString("hello world"));
