//                 🚀|| 100 Days of Coding Challenge || 🚀
// 🚀 Day 11 Challenge: Start Coding! 🚀
// Question 32: Checking Usernames: Ensure uniqueness in usernames.
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
