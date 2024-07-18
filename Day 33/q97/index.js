//                 🚀 || 100 Days of Coding Challenge || 🚀
// 🚀 Day 33 Challenge: Start Coding! 🚀
// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
function getCurrentDateFormatted() {
    var now = new Date();
    var day = String(now.getDate()).padStart(2, '0');
    var month = String(now.getMonth() + 1).padStart(2, '0');
    var year = now.getFullYear();
    return "".concat(day, "-").concat(month, "-").concat(year);
}
console.log(getCurrentDateFormatted());
//                              XXXXXXXXXXXXXXXX
