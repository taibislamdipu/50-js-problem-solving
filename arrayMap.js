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

// solution 2
const newArray2 = [];

for (let i = 0; i < originalArray.length; i++) {
  if (originalArray[i] < 5) {
    newArray2.push(originalArray[i] + 10);
  } else {
    newArray2.push(originalArray[i]);
  }
}

Hints: console.log(newArray2); //expected output: [11, 6, 12, 7, 13, 8, 14, 9, 5, 10]

// solution 3
const newArray3 = originalArray.map((value) =>
  value < 5 ? value + 10 : value
);

Hints: console.log(newArray3); //expected output: [11, 6, 12, 7, 13, 8, 14, 9, 5, 10]
