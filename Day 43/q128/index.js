//                 🚀 || 100 Days of Coding Challenge || 🚀
// 🚀 Day 43 Challenge: Start Coding! 🚀
// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.
var multiplyParameters = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, number) { return total * number; }, 1);
};
console.log(multiplyParameters(3, 5, 6));
//                         XXXXXXXXXXXXXXX
