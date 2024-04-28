//                 🚀|| 100 Days of Coding Challenge || 🚀
// 🚀 Day 10 Challenge: Start Coding! 🚀
// Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.
var age = 1;
if (age < 2) {
    console.log("This Person is a Baby!");
}
else if (age < 4) {
    console.log("Thei Person is a Toddler!");
}
else if (age < 13) {
    console.log("This Person is a Kid!");
}
else if (age < 20) {
    console.log("This Person is a TeenAger!");
}
else if (age < 65) {
    console.log("This Person is an Adult!");
}
else {
    console.log("This Person is an Elder!");
}
//                           XXXXXXXXXXXXXXXXXXX
// Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.
var favoriteFruit = ["Grapes", "Apple", "Mango"];
if (favoriteFruit.includes("Grapes")) {
    console.log("You really like Grapes!");
}
if (favoriteFruit.includes("Mango")) {
    console.log("You really like Mango!");
}
//                           XXXXXXXXXXXXXXXXXXX
// Question 30: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var book = {
    title: "The Hobbit",
    author: "J.R.R Tolkein",
    yearPublished: 1937
};
console.log("Book Info: ".concat(book.title, " by ").concat(book.author, ", published in ").concat(book.yearPublished, "."));
//                           XXXXXXXXXXXXXXXXXXX
