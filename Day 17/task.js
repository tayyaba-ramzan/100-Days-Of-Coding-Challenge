// 🚀 Day 17 Challenge: Start Coding! 🚀
// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
function logHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    for (var _a = 0, hobbies_1 = hobbies; _a < hobbies_1.length; _a++) {
        var hobby = hobbies_1[_a];
        console.log("I enjoy ".concat(hobby, "."));
    }
}
logHobbies("Learning TypeScript", "Coding", "Reading");
//                         XXXXXXXXXXXXXXX
// Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.
var myIdealDay = "My ideal day would involve:\n1. Waking up early and going for a jog.\n2. Spending a few hours coding on a personal project.\n3. Ending the day by reading a good book.";
console.log(myIdealDay);
//                         XXXXXXXXXXXXXXX
// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
// Simple Function
function calculate_area(width, height) {
    return width * height;
}
console.log(calculate_area(10, 20));
// Arrow Function
var calculateArea = function (width, height) {
    return width * height;
};
console.log(calculateArea(15, 20));
//                         XXXXXXXXXXXXXXX
