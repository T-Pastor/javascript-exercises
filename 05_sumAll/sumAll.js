const sumAll = function(num1, num2) {
    let numbers = [num1, num2];
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers.at(i) !== 'number' || numbers.at(i) < 0 || numbers.at(i) % 1 > 0) {
            return 'ERROR';
        }
    }

    numbers.sort(function(a, b) {return a - b});



    for (let i = numbers.at(0); i <= numbers.at(1); i++) {
        sum += i;
    }

    return sum;
}




// Do not edit below this line
module.exports = sumAll;
