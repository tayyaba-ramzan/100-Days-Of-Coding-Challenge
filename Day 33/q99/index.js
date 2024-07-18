//                 🚀 || 100 Days of Coding Challenge || 🚀
// 🚀 Day 33 Challenge: Start Coding! 🚀
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
//                         XXXXXXXXXXXXXXX
