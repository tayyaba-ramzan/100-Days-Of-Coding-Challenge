//                 🚀|| 100 Days of Coding Challenge || 🚀
// 🚀 Day 48 Challenge: Start Coding! 🚀 
// Question 142: Create a promise that resolves with "Hello, world!" after 2 seconds.
var helloPromise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Hello World!");
    }, 2000);
});
helloPromise.then(function (message) { return console.log(message); });
//                              XXXXXXXXXXXXXXXX
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
//                               XXXXXXXXXXXXXXXX
// Question 144: Explain the use of the Promise.all() methods with an example.
var promise1 = Promise.resolve(3);
var promise2 = 40;
var promise3 = new Promise(function (resolve) {
    setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3]).then((function (values) {
    console.log(values);
}));
//                               XXXXXXXXXXXXXXXX
