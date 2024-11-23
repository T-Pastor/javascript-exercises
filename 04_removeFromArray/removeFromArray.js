const removeFromArray = function(array, value) {
    let index = undefined;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            index = i;
            break;
        }
    }

    return array.toSpliced(index, 1);
};

// Do not edit below this line
module.exports = removeFromArray;
