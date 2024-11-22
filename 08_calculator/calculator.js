const add = function(...nums) {
  let total = 0;
  
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  
  return total;	
};

const subtract = function(...nums) {
	let total = nums[0];
  
  for (let i = 1; i < nums.length; i++) {    
    total -= nums[i];
  }
  
  return total;
};

const sum = function(...nums) {
  let total = 0;
  let numbers = nums.flat();
  
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  
  return parseInt(total);
};

const multiply = function(...nums) {
  let total = 1;
  let numbers = nums.flat();
  
  for (let i = 0; i < numbers.length; i++) {
    total *= numbers[i];
  }
  
  return total;	
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
	let total = 1;
  
  if (num == 0) {
    return parseInt(1);
  }
  
  for (let i = 1; i <= num; i++) {
    total *= i;
  }

  return total;
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
