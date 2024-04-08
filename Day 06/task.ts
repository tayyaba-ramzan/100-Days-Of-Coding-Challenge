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

// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
for (let guest of guests){
    console.log(`Dear ${guest}, you're still invited to dinner.`);
    
}
guests.splice(0, guests.length);
console.log(guests);

//                         XXXXXXXXXXXXXXX

// Question 18: Seeing the World: Think of at least five places you’d like to visit.

let places: string[] = ["Pakistan", "Iceland", "Japan", "Switzerland", "Norway"];

console.log("Original order:", places);

console.log("Alphabetical order:", [...places].sort());

console.log("Original order:", places);

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);

//                         XXXXXXXXXXXXXXX
