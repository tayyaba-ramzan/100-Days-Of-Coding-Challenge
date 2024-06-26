//                 🚀|| 100 Days of Coding Challenge || 🚀

// 🚀 Day 11 Challenge: Start Coding! 🚀

// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.

let ordinalNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of ordinalNumbers) {
    let suffix = "th";
    if (number === 1) {
        suffix = "st"
    } else if (number === 2) {
        suffix = "nd"
    } else if (number === 3) {
        suffix = "rd"
    }
    console.log(`${number}${suffix

        }`);

}

//                           XXXXXXXXXXXXXXXXXXX