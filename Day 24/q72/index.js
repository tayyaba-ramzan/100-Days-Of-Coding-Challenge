//                 🚀|| 100 Days of Coding Challenge || 🚀
// 🚀 Day 24 Challenge: Start Coding! 🚀
// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
{
    var blockLet = "visible inside the block";
    var blockConst = "also only inside the block";
    console.log(blockLet);
    console.log(blockConst);
}
try {
    console.log(blockLet); // This will fail
}
catch (error) {
    console.log("`blockLet` is not accessible outside the block.");
}
try {
    console.log(blockConst); // This will also fail
}
catch (error) {
    console.log("`blockConst` is not accessible outside the block.");
}
//                         XXXXXXXXXXXXXXX
