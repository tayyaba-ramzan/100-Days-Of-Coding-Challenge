// 🚀 Day 16 Challenge: Start Coding! 🚀
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
var laptop = {
    make: "Dell",
    model: "XPS 15",
    year: "2021",
    descibe: function () {
        console.log("This laptop is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model, "."));
        console.log("This laptop is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model, "."));
    }
};
laptop.descibe();
//                              XXXXXXXXXXXXXXXX
// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
var laptops = [
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "Apple", model: "MacBook Pro", year: 2020 },
    { make: "HP", model: "Spectre x360", year: 2021 }
];
var laptop1 = laptops[0], laptop2 = laptops[1];
console.log(laptop1);
console.log(laptop2);
//                               XXXXXXXXXXXXXXXX
// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
var pricesSet1 = [1200, 1500, 1100];
var pricesSet2 = [1000, 1300, 1600];
var combinedPrices = __spreadArray(__spreadArray([], pricesSet1, true), pricesSet2, true).sort(function (a, b) { return a - b; });
console.log(combinedPrices);
//                               XXXXXXXXXXXXXXXX
