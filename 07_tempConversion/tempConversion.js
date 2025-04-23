function convertToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5 / 9;
  return Number(celsius.toFixed(1));
}

function convertToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9 / 5) + 32;
  return Number(fahrenheit.toFixed(1));
}
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
