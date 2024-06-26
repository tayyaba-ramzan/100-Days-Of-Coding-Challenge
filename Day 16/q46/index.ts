//                 🚀|| 100 Days of Coding Challenge || 🚀

// 🚀 Day 16 Challenge: Start Coding! 🚀

// Question 45: Cars: Create detailed car objects with flexible properties.

function make_car(manufacturer: string, model: string, ...options: [string, string | number | boolean][]): Object {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));

//                         XXXXXXXXXXXXXXX