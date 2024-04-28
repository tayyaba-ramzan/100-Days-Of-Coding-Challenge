//                 🚀|| 100 Days of Coding Challenge || 🚀
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
// Question 146: Show an example of a callback function used to filter an array of numbers.
var numbers = [1, 5, 7, 3, 8, 10, 20, 30, 40, 50];
var filteredNumbers = numbers.filter(function (numbers) { return numbers >= 10; });
console.log(filteredNumbers);
//                               XXXXXXXXXXXXXXXX
// Question 147: Explain how to handle errors in a callback pattern.
function fetchData(callback) {
    var error = new Error("Failled to fetch Data.");
    var data = ("Some Data");
    if (Math.random() > 0.5) {
        callback(null, data);
    }
    else {
        callback(error);
    }
}
fetchData(function (error, data) {
    if (error) {
        console.error(error.message);
    }
    else {
        console.log(data);
    }
});
//                               XXXXXXXXXXXXXXXX
