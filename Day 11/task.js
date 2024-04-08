// 🚀 Day 11 Challenge: Start Coding! 🚀
// Question 31: No Users: Ensure your user list isn’t empty.
var userName = [];
if (userName.length === 0) {
    console.log("We need to find some users.");
}
else {
    // Greet users
}
//                           XXXXXXXXXXXXXXXXXXX
// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
var current_users = ["user1", "admin", "user3", "user4", "user5"];
var new_users = ["User1", "User6", "user7", "admin", "User9"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
//                           XXXXXXXXXXXXXXXXXXX
// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    var suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log("".concat(number).concat(suffix));
}
//                           XXXXXXXXXXXXXXXXXXX
