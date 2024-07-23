//                 🚀 || 100 Days of Coding Challenge || 🚀

// 🚀 Day 43 Challenge: Start Coding! 🚀

// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.

const multiplyParameters = (...numbers: number[]) =>
    numbers.reduce((total, number) => total * number, 1);
console.log(multiplyParameters(3, 5, 6));

//                         XXXXXXXXXXXXXXX