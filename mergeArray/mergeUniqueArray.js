// #25: Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

// solution 1
function mergeUniqueArray(arr1, arr2) {
  var unique = [];
  var mergedArray = arr1.concat(arr2);
  for (var i = 0; i < mergedArray.length; i++) {
    if (unique.includes(mergedArray[i])) {
      continue;
    } else {
      unique.push(mergedArray[i]);
    }
  }
  return unique;
}
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [1, 3, 20, 5, 10];
console.log(mergeUniqueArray(arr1, arr2));

// solution 2
function mergeUniqueArray2(arr1, arr2) {
  var unique = new Set([...arr1, ...arr2]);

  return Array.from(unique);
}
console.log(mergeUniqueArray2(arr1, arr2));
