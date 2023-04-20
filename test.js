var ar1 = [1, 2, 3, 10, 5, 3, 14];
var ar2 = [-1, 4, 5, 6, 14];

var ar = mergeLeft(ar1, ar2);
console.log(ar);

function mergeLeft(ar1, ar2) {
  var ar = [];

  for (let el of ar1) {
    if (!ar2.includes(el)) {
      ar.push(el);
    }
  }

  return ar;
}

// output : [ 1, 2, 3, 10, 3 ]
