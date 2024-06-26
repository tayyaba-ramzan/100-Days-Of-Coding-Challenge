//                 🚀|| 100 Days of Coding Challenge || 🚀
// 🚀 Day 18 Challenge: Start Coding! 🚀
// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
function createObjectWithDynamicKey(key, value) {
    var dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
var userPreference = createObjectWithDynamicKey("theme", "dark");
console.log(userPreference);
//                               XXXXXXXXXXXXXXXX
