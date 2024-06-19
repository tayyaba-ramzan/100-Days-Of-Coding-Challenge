//                 🚀|| 100 Days of Coding Challenge || 🚀

// 🚀 Day 6 Challenge: Start Coding! 🚀

// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

let guests: string[] = ["Abeeha", "Fabeeha", "Faryal", "Kinza"];
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