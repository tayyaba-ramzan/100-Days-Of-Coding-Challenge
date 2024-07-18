//                 🚀 || 100 Days of Coding Challenge || 🚀
// 🚀 Day 32 Challenge: Start Coding! 🚀
// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
function calculateSum(numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
var numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers));
//                         XXXXXXXXXXXXXXX
