//                 🚀|| 100 Days of Coding Challenge || 🚀
// 🚀 Day 21 Challenge: Start Coding! 🚀
// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["MotorCycle"] = 2] = "MotorCycle";
})(VehicleType || (VehicleType = {}));
console.log(VehicleType.Truck);
//                              XXXXXXXXXXXXXXXX
// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
var student = {
    name: "Tayyaba",
    age: 20,
    courses: ["JavaScript", "TypeScipt", "Python"]
};
console.log(student);
var circle = {
    kind: "Circle",
    radius: 6
};
var rectangle = {
    kind: "Rectangle",
    width: 10,
    height: 20
};
console.log(circle);
console.log(rectangle);
//                               XXXXXXXXXXXXXXXX
