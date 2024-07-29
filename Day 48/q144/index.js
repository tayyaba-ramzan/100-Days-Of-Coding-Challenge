//                 🚀 || 100 Days of Coding Challenge || 🚀
// 🚀 Day 48 Challenge: Start Coding! 🚀
// Question 144: Explain the use of the Promise.all() methods with an example.
var promise1 = Promise.resolve(3);
var promise2 = 40;
var promise3 = new Promise(function (resolve) {
    setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3]).then((function (values) {
    console.log(values);
}));
//                         XXXXXXXXXXXXXXX
