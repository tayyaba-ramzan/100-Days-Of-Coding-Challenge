// 🚀 Day 19 Challenge: Start Coding! 🚀

// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.

let number: number[] = [2, 4, 6, 8, 10, 12];
let doubleNumber = number.map(number => number * 2);
console.log(doubleNumber);


//                         XXXXXXXXXXXXXXX

// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

let mixedArray = [1, "Apple", "Banana", 2, true, false, "Carrot"];
let stringArray = mixedArray.filter(item => typeof item === "string");
console.log(stringArray);


//                         XXXXXXXXXXXXXXX

// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.

let grades:number[]=[60,76,88,70,69,91,53];
let averageGrade=grades.reduce((total,grade)=>total+grade,0)/grades.length;
console.log(averageGrade);

//                         XXXXXXXXXXXXXXX