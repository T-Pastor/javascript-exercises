const removeFromArray = function(array, ...value) {

   for (let i = 0; i < value.length; i++) {
        for(let j = 0; j < array.length;) {
            if (value.at(i) === array.at(j)) {
                array.splice(j, 1);
                j = j;
            } else {
                j++;
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
