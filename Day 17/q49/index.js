//                 🚀|| 100 Days of Coding Challenge || 🚀
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
