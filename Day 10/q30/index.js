//                 🚀|| 100 Days of Coding Challenge || 🚀
// 🚀 Day 10 Challenge: Start Coding! 🚀
// Question 30: Hello Admin: Greet users differently, especially 'admin'.
var userNames = ["admin", "userOne", "userTwo", "userThree"];
for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
    var userName = userNames_1[_i];
    if (userName === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(userName, ", thank you for logging in again."));
    }
}
//                           XXXXXXXXXXXXXXXXXXX
