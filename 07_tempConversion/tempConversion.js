const convertToCelsius = function(temp) {
  var multiplier = Math.pow(10, 1);
  const celsiusFull = (temp - 32) * 5/9;
  return Math.round(celsiusFull * multiplier) / multiplier;
};

const convertToFahrenheit = function(temp) {
  var multiplier = Math.pow(10, 1);
  const fahrenheitFull = (temp * (9 / 5)) + 32;
  return Math.round(fahrenheitFull * multiplier) / multiplier;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
