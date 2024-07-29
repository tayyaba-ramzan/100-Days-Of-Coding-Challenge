//                 🚀 || 100 Days of Coding Challenge || 🚀
// 🚀 Day 49 Challenge: Start Coding! 🚀
// Question 145: Create a function that accepts a callback and invokes it with some arguments. 
function executeCallback(callback, num1, num2) {
    callback(num1, num2);
}
var add = function (x, y) {
    console.log(x + y);
};
executeCallback(add, 7, 7);
//                              XXXXXXXXXXXXXXXX
