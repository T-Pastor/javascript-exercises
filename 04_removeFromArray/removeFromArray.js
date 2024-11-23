const removeFromArray = function(array, ...value) {

   for (let i = 0; i < value.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if (value.at(i) === array.at(j)) {
                array.splice(j, 1);
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
