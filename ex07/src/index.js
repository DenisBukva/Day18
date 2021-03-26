let numberArray = [9, 5, 4, 11, 5, 12, 13, 15, 4, 2, 5];
let uniqueArray;
uniqueArray = [...new Set(numberArray)];
uniqueArray.sort((a, b) => a - b);


console.log(uniqueArray);
module.exports = { numberArray, uniqueArray};