// 🚀 Day 10 Challenge: Start Coding! 🚀

// Question 1: Stages of Life: Determine a person’s life stage with an if-else chain.

let age: number = 1;
if (age < 2) {
    console.log("This Person is a Baby!");

} else if (age < 4) {
    console.log("Thei Person is a Toddler!");

} else if (age < 13) {
    console.log("This Person is a Kid!");

} else if (age < 20) {
    console.log("This Person is a TeenAger!");

} else if (age < 65) {
    console.log("This Person is an Adult!");

} else {
    console.log("This Person is an Elder!");

}

//                           XXXXXXXXXXXXXXXXXXX


// Question 2: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.

let favoriteFruit:string[]=["Grapes","Apple","Mango"];
if (favoriteFruit.includes("Grapes")) {
    console.log("You really like Grapes!");
    
} 
if (favoriteFruit.includes("Mango")) {
    console.log("You really like Mango!");
    
}

//                           XXXXXXXXXXXXXXXXXXX

// Question 3: Hello Admin: Greet users differently, especially 'admin'.

let userNames:string[]=["admin","userOne","userTwo","userThree"];
for (let userName of userNames){
    if (userName==="admin") {
        console.log("Hello admin, would you like to see a status report?");
        
    } else{
        console.log(`Hello ${userName}, thank you for logging in again.`);
    }
    
}

//                           XXXXXXXXXXXXXXXXXXX