//                 🚀|| 100 Days of Coding Challenge || 🚀
// 🚀 Day 6 Challenge: Start Coding! 🚀
// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
var guests = ["Abeeha", "Fabeeha", "Faryal", "Kinza"];
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
}
guests.splice(0, guests.length);
console.log(guests);
//                         XXXXXXXXXXXXXXX
