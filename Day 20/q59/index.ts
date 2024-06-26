//                 🚀|| 100 Days of Coding Challenge || 🚀

// 🚀 Day 20 Challenge: Start Coding! 🚀

// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

function makeAdder(valueToAdd: number): (number) => number {
    return function (number: number): number {
        return number + valueToAdd
    }
}
let addFive = makeAdder(6);
console.log(addFive(10));

//                         XXXXXXXXXXXXXXX