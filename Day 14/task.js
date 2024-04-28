//                 🚀|| 100 Days of Coding Challenge || 🚀
// 🚀 Day 14 Challenge: Start Coding! 🚀
// Question 40: Album: Create objects for music albums.
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
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
var magicians = ["Alice", "David", "Chris"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magicians);
//                               XXXXXXXXXXXXXXXX
Question 42: Great Magicians: Add "the Great" to magician names.
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians);
show_magicians(magicians);
//                               XXXXXXXXXXXXXXXX
