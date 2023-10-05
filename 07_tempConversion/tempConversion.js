const convertToCelsius = function (temp) {
  let tempInDegree = (temp - 32) * (5 / 9);
  return Math.round(tempInDegree * 10) / 10;
};

const convertToFahrenheit = function (temp) {
  let tempInImperial = temp * (9 / 5) + 32;
  return Math.round(tempInImperial * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
