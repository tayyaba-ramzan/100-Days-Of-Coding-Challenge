//                 🚀|| 100 Days of Coding Challenge || 🚀

// 🚀 Day 24 Challenge: Start Coding! 🚀

// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.

// Difference Between Let & Const

// Let
let age: number = 20;
age = 22;
console.log(age);

// Const
const myName: string = "Tayyaba";
try {
    myName = "Tayyaba Ramzan";
} catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable.");
}

//                         XXXXXXXXXXXXXXX