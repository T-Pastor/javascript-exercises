const convertToCelsius = function(degreesF) {
  let celsius = (degreesF - 32) / (9 / 5);
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(degreesC) {
  let farenheit = (degreesC * (9 / 5)) + 32;
  return parseFloat(farenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
