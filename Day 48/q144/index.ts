//                 🚀 || 100 Days of Coding Challenge || 🚀

// 🚀 Day 48 Challenge: Start Coding! 🚀

// Question 144: Explain the use of the Promise.all() methods with an example.

const promise1 = Promise.resolve(3);
const promise2 = 40;
const promise3 = new Promise<string>((resolve) => {
    setTimeout(resolve, 100, "foo")

})
Promise.all([promise1, promise2, promise3]).then((values => {
    console.log(values);

}))

//                         XXXXXXXXXXXXXXX