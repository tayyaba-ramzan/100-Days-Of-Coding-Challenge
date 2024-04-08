// 🚀 Day 5 Challenge: Start Coding! 🚀
// Question 1: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transports = ["Honda", "Comic", "BikesForever"];
for (var _i = 0, transports_1 = transports; _i < transports_1.length; _i++) {
    var transport = transports_1[_i];
    console.log("I would like to own a ".concat(transport));
}
//                               XXXXXXXXXXXXXXXX
// Question 2: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guests = ["Amir", "Faisal", "Hassan"];
for (var _a = 0, guests_1 = guests; _a < guests_1.length; _a++) {
    var guest = guests_1[_a];
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
}
//                               XXXXXXXXXXXXXXXX
// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
var unableToAttend = "Faisal";
console.log("".concat(unableToAttend, " can not make it to dinner."));
var newGuest = unableToAttend.replace("Faisal", "Imran");
console.log("Dear ".concat(newGuest, ", would you like to join me for dinner?"));
//                               XXXXXXXXXXXXXXXX
