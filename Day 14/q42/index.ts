//                 🚀|| 100 Days of Coding Challenge || 🚀

// 🚀 Day 14 Challenge: Start Coding! 🚀

// Question 42: Great Magicians: Add "the Great" to magician names.

let magicians: string[] = ["Alice", "David", "Chris"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians);

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians);

//                               XXXXXXXXXXXXXXXX