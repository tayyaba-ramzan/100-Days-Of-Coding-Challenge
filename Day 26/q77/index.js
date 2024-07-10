//                 🚀|| 100 Days of Coding Challenge || 🚀
// 🚀 Day 26 Challenge: Start Coding! 🚀
// Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.
function greetUser(name) {
    if (name === void 0) { name = "anonymous"; }
    return "Hello, ".concat(name);
}
console.log(greetUser("Tayyaba"));
console.log(greetUser());
//                         XXXXXXXXXXXXXXX
