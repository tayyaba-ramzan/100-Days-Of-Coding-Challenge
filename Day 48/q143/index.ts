//                 🚀 || 100 Days of Coding Challenge || 🚀

// 🚀 Day 48 Challenge: Start Coding! 🚀

// Question 143: Show how to use the .then() and .cath() methods to handle Promise resolution and rejection.

let conditionalPromise = new Promise<string>((resolve, reject) => {
    const success = Math.random() - 0.5;
    if (success) {
        resolve("You are successed");
    } else {
        reject(new Error("Failled"));
    }
})
conditionalPromise
    .then((res) => console.log(res))
    .catch((error) => console.log(error.message));

//                         XXXXXXXXXXXXXXX