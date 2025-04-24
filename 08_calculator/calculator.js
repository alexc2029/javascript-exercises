const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const sum = function (arr) {
	/*let sum = 0;
    for (let i = 0; i < arr.length; i++) sum += arr[i];
    return sum;
    */
	return arr.reduce((result, currentValue) => result + currentValue, 0);
};

const multiply = function (arr) {
	/*let result = 1;
	for (let i = 0; i < arr.length; i++) result *= arr[i];
	return result;
  */
	return arr.reduce((result, currentValue) => result * currentValue, 1);
};

const power = function (base, power) {
	return base ** power;
};

const factorial = function (a) {
	let fact = 1;
	for (let i = 2; i <= a; i++) fact *= i;
	return fact;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
