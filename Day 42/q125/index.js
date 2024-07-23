//                 🚀 || 100 Days of Coding Challenge || 🚀
// 🚀 Day 42 Challenge: Start Coding! 🚀
// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.
var rectangle = {
    length: 10,
    width: 15,
    calculateArea: function () {
        return this.length * this.width;
    },
};
console.log(rectangle.calculateArea());
//                         XXXXXXXXXXXXXXX
