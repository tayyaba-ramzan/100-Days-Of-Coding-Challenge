// 🚀 Day 32 Challenge: Start Coding! 🚀
// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
var words = ["Hello", "World", "TypeScript", "JavaScript"];
var lengths = words.map(function (word) { return word.length; });
console.log(lengths);
//                         XXXXXXXXXXXXXXX
// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
function numGreatorThenTen(num) {
    return num.filter(function (num) { return num > 10; });
}
var num = [10, 15, 6, 18, 20, 3, 17];
console.log(numGreatorThenTen(num));
//                         XXXXXXXXXXXXXXX
// Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.
function isValueNan(value) {
    return isNaN(value);
}
console.log(isValueNan("Bye"));
console.log(isValueNan(102030));
//                         XXXXXXXXXXXXXXX
