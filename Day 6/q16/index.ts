//                 🚀|| 100 Days of Coding Challenge || 🚀

// 🚀 Day 6 Challenge: Start Coding! 🚀

// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.

let guests: string[] = ["Abeeha", "Fabeeha", "Faryal", "Kinza"];
console.log("Great news! I found a bigger dinner table!");
guests.unshift("Muskan");
guests.splice(3,0, "Ayza");
guests.push("Anabiya");
for (let guest of guests) {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
}

//                         XXXXXXXXXXXXXXX