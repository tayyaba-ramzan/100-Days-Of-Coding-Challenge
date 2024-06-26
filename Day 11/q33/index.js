//                 🚀|| 100 Days of Coding Challenge || 🚀
// 🚀 Day 11 Challenge: Start Coding! 🚀
// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
var ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, ordinalNumbers_1 = ordinalNumbers; _i < ordinalNumbers_1.length; _i++) {
    var number = ordinalNumbers_1[_i];
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
