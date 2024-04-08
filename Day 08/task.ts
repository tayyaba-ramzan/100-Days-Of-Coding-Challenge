// 🚀 Day 8 Challenge: Start Coding! 🚀

// Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.

let cousins:string[]=["Areeba","Rida Fatima","Hifza"];
console.log(cousins[2]);


//                               XXXXXXXXXXXXXXXX

// Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.

let num:number=3;
if (num%2==0) {
    console.log("Even Number True");
    
} else {
    console.log("Odd Number False");
    
}

//                               XXXXXXXXXXXXXXXX

// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.

//typescript
// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
console.log("apple".toLowerCase() === "Apple".toUpperCase());// False

// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True

// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True

// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True

//                               XXXXXXXXXXXXXXXX
