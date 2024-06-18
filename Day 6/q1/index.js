//                 🚀|| 100 Days of Coding Challenge || 🚀
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
