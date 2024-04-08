// 🚀 Day 6 Challenge: Start Coding! 🚀

// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
var guests = ["Abeeha", "Fabeeha", "Faryal", "Kinza"];
console.log("Great news! I found a bigger dinner table!");
guests.unshift("Muskan");
guests.splice(3, 0, "Ayza");
guests.push("Anabiya");
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
}
//                         XXXXXXXXXXXXXXX
// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guest = guests_2[_a];
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
}
guests.splice(0, guests.length);
console.log(guests);
//                         XXXXXXXXXXXXXXX
// Question 18: Seeing the World: Think of at least five places you’d like to visit.
var places = ["Pakistan", "Iceland", "Japan", "Switzerland", "Norway"];
console.log("Original order:", places);
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", __spreadArray([], places, true).sort().reverse());
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
