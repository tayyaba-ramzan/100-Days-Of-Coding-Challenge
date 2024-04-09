// 🚀 Day 23 Challenge: Start Coding! 🚀
// Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 
function addNumberAndString(number, numberString) {
    return number + Number(numberString);
}
console.log(addNumberAndString(25, "10"));
//                              XXXXXXXXXXXXXXXX
// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
function multiplyingDecimals(num1, num2) {
    return Math.round(num1 * num2 * 100) / 100;
}
console.log(multiplyingDecimals(12.5, 4.5));
//                               XXXXXXXXXXXXXXXX
// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
function divideAndRemainder(dividend, divisor) {
    var quotient = Math.floor(dividend / divisor);
    var remainder = dividend % divisor;
    return { quotient: quotient, remainder: remainder };
}
console.log(divideAndRemainder(10, 3));
//                               XXXXXXXXXXXXXXXX
