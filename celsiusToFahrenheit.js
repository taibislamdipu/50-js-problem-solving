// #8: Create a function that will convert from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  if (typeof celsius !== "number") {
    return "Error: Please input a valid number for the temperature in Celsius.";
  } else {
    var fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
  }
}

console.log(celsiusToFahrenheit(10));
