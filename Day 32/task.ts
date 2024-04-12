// 🚀 Day 32 Challenge: Start Coding! 🚀

// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.

const words: string[] = ["Hello", "World", "TypeScript", "JavaScript"];
const lengths: number[] = words.map(word => word.length);
console.log(lengths);

//                         XXXXXXXXXXXXXXX

// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

function numGreatorThenTen(num: number[]): number[] {
    return num.filter(num => num > 10)
}
const num: number[] = [10, 15, 6, 18, 20, 3, 17];
console.log(numGreatorThenTen(num));

//                         XXXXXXXXXXXXXXX

// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

function calculateSum(numbers: number[]): number {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
const numbers: number[] = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers));

//                         XXXXXXXXXXXXXXX