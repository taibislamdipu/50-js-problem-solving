// #3: Print the multiplication table with 7
function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    const result = `${num} x ${i} = ${num * i}`;
    console.log(result);
  }
}

multiplicationTable(2);

// #4: Print all the multiplication tables with numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(`Multiplication tables of ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
