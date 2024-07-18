//                 🚀 || 100 Days of Coding Challenge || 🚀

// 🚀 Day 38 Challenge: Start Coding! 🚀

// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

function logCapitalOfCanada(countries: Map<string, string>): void {
    if (countries.has("Canada")) {
        console.log(`The capital of Canada is ${countries.get("Canada")}`);
    } else {
        console.log("Canada is not in the Map.");
    }
}

const countries = new Map<string, string>();
countries.set("Canada", "Ottawa");
countries.set("Pakistan", "Islamabad");

logCapitalOfCanada(countries);

//                         XXXXXXXXXXXXXXX