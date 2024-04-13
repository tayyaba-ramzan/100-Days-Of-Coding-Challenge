// 🚀 Day 42 Challenge: Start Coding! 🚀
// Question 124: Create a function inside an object that returns the object's own name property using the this keyword.
var person = {
    myName: "Tayyaba Ramzan",
    getName: function () {
        return this.myName;
    },
};
console.log(person.getName());
//                              XXXXXXXXXXXXXXXX
// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.
var rectangle = {
    length: 10,
    width: 15,
    calculateArea: function () {
        return this.length * this.width;
    },
};
console.log(rectangle.calculateArea());
//                               XXXXXXXXXXXXXXXX
// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.
var myObject = {
    property: "Value",
    outerMethod: function () {
        var _this = this;
        console.log(this.property);
        var innerMethod = function () {
            console.log(_this.property);
        };
        innerMethod();
    },
};
myObject.outerMethod();
//                               XXXXXXXXXXXXXXXX
