//                 🚀|| 100 Days of Coding Challenge || 🚀
// 🚀 Day 15 Challenge: Start Coding! 🚀
// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
var magicians = ["Alice", "David", "Chris"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magicians);
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians);
show_magicians(magicians);
function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 1; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' the Great');
    }
    ;
    return greatMagicians;
}
var magician3 = ["Usman", "Umer", "Umair"];
var greatMagicians2 = make_great2(magician3);
make_great(magician3);
show_magicians(greatMagicians2);
//                         XXXXXXXXXXXXXXX
