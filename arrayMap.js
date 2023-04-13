// Question :Use the map() method to create a new array that adds 10 to each value of the original array, but only for values that are less than 5.

// solution 1
const originalArray = [1, 6, 2, 7, 3, 8, 4, 9, 5, 10];

const newArray = originalArray.map((value) => {
  if (value < 5) {
    return value + 10;
  } else {
    return value;
  }
});

const newArray = originalArray.map((value) => (value < 5 ? value + 10 : value));

Hints: console.log(newArray); //expected output: [11, 6, 12, 7, 13, 8, 14, 9, 5, 10]

// solution 2
const newArray = [];

for (let i = 0; i < originalArray.length; i++) {
  if (originalArray[i] < 5) {
    newArray.push(originalArray[i] + 10);
  } else {
    newArray.push(originalArray[i]);
  }
}

Hints: console.log(newArray); //expected output: [11, 6, 12, 7, 13, 8, 14, 9, 5, 10]
