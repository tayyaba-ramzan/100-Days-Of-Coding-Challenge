//                 🚀|| 100 Days of Coding Challenge || 🚀
// 🚀 Day 20 Challenge: Start Coding! 🚀
// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
var userProfile = function () {
    var name = "Tayyaba";
    var age = 20;
    return {
        displayInfo: function () {
            console.log("My name is ".concat(name, " & my age is ").concat(age));
        }
    };
}();
console.log(userProfile.displayInfo());
//                               XXXXXXXXXXXXXXXX
