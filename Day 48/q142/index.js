//                 🚀 || 100 Days of Coding Challenge || 🚀
// 🚀 Day 48 Challenge: Start Coding! 🚀
// Question 142: Create a promise that resolves with "Hello, world!" after 2 seconds.
var helloPromise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Hello World!");
    }, 2000);
});
helloPromise.then(function (message) { return console.log(message); });
//                              XXXXXXXXXXXXXXXX
