const convertToCelsius = function(tempFahrenheit) {
  let tempC=(tempFahrenheit-32)*(5/9);
  tempC=Math.round(tempC*10)/10;
  return tempC;
};

const convertToFahrenheit = function(tempCelsius) {
  let tempF=tempCelsius*(9/5)+32;
  tempF=Math.round(tempF*10)/10;
  return tempF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
