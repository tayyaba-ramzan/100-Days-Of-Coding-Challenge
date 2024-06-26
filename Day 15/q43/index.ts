//                 🚀|| 100 Days of Coding Challenge || 🚀

// 🚀 Day 15 Challenge: Start Coding! 🚀

// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.

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
show_magicians(magicians);
function make_great2(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 1; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' the Great');
    };
    return greatMagicians;

}
const magician3: string[] = ["Usman", "Umer", "Umair"];
const greatMagicians2: string[] = make_great2(magician3);
make_great(magician3);
show_magicians(greatMagicians2);

//                         XXXXXXXXXXXXXXX