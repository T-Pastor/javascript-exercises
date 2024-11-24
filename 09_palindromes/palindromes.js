const palindromes = function (expression) {
    let reverseString = "";
    let tempString = "";
    let formattedString = "";

    tempString = expression.toLowerCase();

    formattedString = tempString.replace(/[^A-Za-z]/g, '');

    for (let i = formattedString.length - 1; i >=0; i--) {
        reverseString += formattedString[i];
    }

    if (reverseString === formattedString) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
