// 🚀 Day 26 Challenge: Start Coding! 🚀
// Question 76: Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.
function add(num1, num2) {
    return (num1 + num2);
}
console.log(add(10, 10));
//                         XXXXXXXXXXXXXXX
// Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.
function greetUser(name) {
    if (name === void 0) { name = "anonymous"; }
    return "Hello, ".concat(name);
}
console.log(greetUser("Tayyaba"));
console.log(greetUser());
//                         XXXXXXXXXXXXXXX
// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
function squareDeclaration(num) {
    return (num * num);
}
console.log(squareDeclaration(3));
//                         XXXXXXXXXXXXXXX
