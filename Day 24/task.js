//                 🚀|| 100 Days of Coding Challenge || 🚀
// 🚀 Day 24 Challenge: Start Coding! 🚀
// Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.
function printNumberWithLet() {
    for (var i = 1; i <= 5; i++) {
        console.log(i);
    }
}
printNumberWithLet();
//                         XXXXXXXXXXXXXXX
// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
// Difference Between Let & Const
// Let
var age = 20;
age = 22;
console.log(age);
// Const
var myName = "Tayyaba";
try {
    myName = "Tayyaba Ramzan";
}
catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable.");
}
//                         XXXXXXXXXXXXXXX
// Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.
function checkBothTrue(value1, value2) {
    return value1 && value2;
}
console.log(checkBothTrue(true, false));
console.log(checkBothTrue(true, true));
//                         XXXXXXXXXXXXXXX
