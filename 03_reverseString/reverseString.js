const reverseString = function(str) {
    let array = str.split('')
    let reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray.join('');
    };

// Do not edit below this line
module.exports = reverseString;
