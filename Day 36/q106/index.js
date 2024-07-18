//                 🚀 || 100 Days of Coding Challenge || 🚀
// 🚀 Day 36 Challenge: Start Coding! 🚀
// Question 106: Determine if a given year is a leap year using comparison operators.
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2020));
console.log(isLeapYear(2021));
console.log(isLeapYear(2024));
//                              XXXXXXXXXXXXXXXX
