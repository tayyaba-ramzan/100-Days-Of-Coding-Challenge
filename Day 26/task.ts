// 🚀 Day 26 Challenge: Start Coding! 🚀

// Question 76: Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.

function add(num1:number,num2:number) {
    return (num1+num2);
}
console.log(add(10,10));


//                         XXXXXXXXXXXXXXX

// Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.

function greetUser(name:string="anonymous") {
    return `Hello, ${name}`;
}
console.log(greetUser("Tayyaba"));
console.log(greetUser());

//                         XXXXXXXXXXXXXXX

// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.

function squareDeclaration(num:number) {
    return (num*num);
}
console.log(squareDeclaration(3));


//                         XXXXXXXXXXXXXXX