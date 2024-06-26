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