const add = function(x, y) {
	return (x + y);
};

const subtract = function(x, y) {
	return (x - y);
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((total, num) => total * num, 1);
};

const power = function(x, y) {
	return (x ** y);
};

const factorial = function(x) {
	let result = 1;
  for (let i = 1; i <= x; i++) {
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
