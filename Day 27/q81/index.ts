//                 🚀|| 100 Days of Coding Challenge || 🚀

// 🚀 Day 27 Challenge: Start Coding! 🚀

// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

function logObjectProperties(obj: object) {
    for (let property in obj) {
        console.log(`${property}: ${obj[property]}`);

    }
}
console.log(logObjectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "Black" }));


//                         XXXXXXXXXXXXXXX