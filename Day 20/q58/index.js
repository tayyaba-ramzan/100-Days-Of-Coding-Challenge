//                 🚀|| 100 Days of Coding Challenge || 🚀
// 🚀 Day 20 Challenge: Start Coding! 🚀
// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
function averageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return total / scores.length;
}
console.log(averageScore(40, 60, 60, 91));
//                         XXXXXXXXXXXXXXX
