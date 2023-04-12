// #9: Create a function that will convert from Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  if (typeof fahrenheit !== "number") {
    return "Error: Please input a valid number for the temperature in fahrenheit.";
  } else {
    const celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;
  }
}

console.log(fahrenheitToCelsius(36));
