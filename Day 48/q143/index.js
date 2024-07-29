//                 🚀 || 100 Days of Coding Challenge || 🚀
// 🚀 Day 48 Challenge: Start Coding! 🚀
// Question 143: Show how to use the .then() and .cath() methods to handle Promise resolution and rejection.
var conditionalPromise = new Promise(function (resolve, reject) {
    var success = Math.random() - 0.5;
    if (success) {
        resolve("You are successed");
    }
    else {
        reject(new Error("Failled"));
    }
});
conditionalPromise
    .then(function (res) { return console.log(res); })
    .catch(function (error) { return console.log(error.message); });
//                         XXXXXXXXXXXXXXX
