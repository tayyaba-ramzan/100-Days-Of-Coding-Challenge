// 🚀 Day 5 Challenge: Start Coding! 🚀

// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transports: string[] = ["Honda", "Comic", "BikesForever"];
for (let transport of transports) {
    console.log(`I would like to own a ${transport}`);

}

//                               XXXXXXXXXXXXXXXX

// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guests: string[] = ["Amir", "Faisal", "Hassan"];
for (let guest of guests) {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);

}

//                               XXXXXXXXXXXXXXXX

// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.

let unableToAttend:string="Faisal";
console.log(`${unableToAttend} can not make it to dinner.`);
let newGuest=unableToAttend.replace("Faisal","Imran");
console.log(`Dear ${newGuest}, would you like to join me for dinner?`);

//                               XXXXXXXXXXXXXXXX
