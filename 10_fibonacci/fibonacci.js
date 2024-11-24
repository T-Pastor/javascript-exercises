const fibonacci = function(num) {
    let fib = [1, 1];

    if (num == 0) {
        return 0;
    } else if (num < 0) {
        return 'OOPS';
    }

    for (let i = 2; i < num; i++) {
            
        let nextNumber = fib.at(i - 1) + fib.at(i - 2);
        fib.push(nextNumber);
    }

    return fib.at(fib.length - 1);
};

// Do not edit below this line
module.exports = fibonacci;
