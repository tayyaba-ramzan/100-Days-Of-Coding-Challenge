// 🚀 Day 14 Challenge: Start Coding! 🚀

// Question 40: Album: Create objects for music albums.

function make_album(artist: string, title: string, tracks?: number) {
    let album = { artist, title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));

//                              XXXXXXXXXXXXXXXX

// Question 41: Magicians: Display magician names from an array.

let magicians: string[] = ["Alice", "David", "Chris"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);


//                               XXXXXXXXXXXXXXXX

// Question 42: Great Magicians: Add "the Great" to magician names.

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

make_great(magicians);
show_magicians(magicians); 

//                               XXXXXXXXXXXXXXXX
