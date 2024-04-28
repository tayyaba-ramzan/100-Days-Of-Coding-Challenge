//                 🚀|| 100 Days of Coding Challenge || 🚀

// 🚀 Day 17 Challenge: Start Coding! 🚀

// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

function logHobbies(...hobbies: string[]) {
    for (let hobby of hobbies) {
        console.log(`I enjoy ${hobby}.`);

    }
}
logHobbies("Learning TypeScript", "Coding", "Reading");

//                         XXXXXXXXXXXXXXX

// Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.

let myIdealDay = `My ideal day would involve:
1. Waking up early and going for a jog.
2. Spending a few hours coding on a personal project.
3. Ending the day by reading a good book.`;

console.log(myIdealDay);

//                         XXXXXXXXXXXXXXX

// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

// Simple Function
function calculate_area(width: number, height: number) {
    return width * height;
}
console.log(calculate_area(10, 20));

// Arrow Function
let calculateArea = (width: number, height: number): number=>{
    return width * height;
}
console.log(calculateArea(15, 20));

//                         XXXXXXXXXXXXXXX
