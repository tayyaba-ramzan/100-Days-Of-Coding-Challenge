//                 🚀|| 100 Days of Coding Challenge || 🚀
// 🚀 Day 13 Challenge: Start Coding! 🚀
// Question 37: Large Shirts: Default values in make_shirt().
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love TypeScript"; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
//                         XXXXXXXXXXXXXXX
// Question 38: Cities: Describing cities with a function.
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Tokyo", "Japan");
//                         XXXXXXXXXXXXXXX
// Question 39: City Names: Formatting city-country pairs.
function city_country(city, country) {
    return ("".concat(city, ", ").concat(country));
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
//                         XXXXXXXXXXXXXXX
