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
// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
function daysUntilNewYear() {
    var today = new Date();
    var newYear = new Date(today.getFullYear() + 1, 0, 1);
    var diff = newYear.getTime() - today.getTime();
    var days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}
console.log(daysUntilNewYear() + " days until New Year.");
//                               XXXXXXXXXXXXXXXX
// Question 99: Generate a date object representing your next birthday and log it to the console.
function getNextBirthday(month, day) {
    var today = new Date();
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
var nextBirthday = getNextBirthday(12, 25);
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
//                               XXXXXXXXXXXXXXXX
