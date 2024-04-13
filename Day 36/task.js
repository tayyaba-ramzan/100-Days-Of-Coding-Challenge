// 🚀 Day 36 Challenge: Start Coding! 🚀
// Question 106: Determine if a given year is a leap year using comparison operators.
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2020));
console.log(isLeapYear(2021));
console.log(isLeapYear(2024));
//                              XXXXXXXXXXXXXXXX
// Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
function divisibleByTwoAndThree(num) {
    return num % 2 === 0 && num % 3 === 0;
}
console.log(divisibleByTwoAndThree(12));
//                               XXXXXXXXXXXXXXXX
// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
function areStringsEqualIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(areStringsEqualIgnoreCase("tayyaba", "tayyaba"));
console.log(areStringsEqualIgnoreCase("Hello", "World"));
//                               XXXXXXXXXXXXXXXX
