//                 🚀 || 100 Days of Coding Challenge || 🚀

// 🚀 Day 48 Challenge: Start Coding! 🚀

// Question 142: Create a promise that resolves with "Hello, world!" after 2 seconds.

let helloPromise = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("Hello World!");

    }, 2000)
})
helloPromise.then((message) => console.log(message));

//                              XXXXXXXXXXXXXXXX