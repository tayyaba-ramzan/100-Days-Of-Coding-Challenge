//                 🚀 || 100 Days of Coding Challenge || 🚀
// 🚀 Day 41 Challenge: Start Coding! 🚀
// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel. 
function logUntilVowel(str) {
    var vowels = "aeiouAEIOU";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char)) {
            console.log("First vowel found: ".concat(char));
            break;
        }
        console.log(char); // Logs each character until a vowel is encountered
    }
}
logUntilVowel("Tayyaba");
logUntilVowel("syzygy");
//                         XXXXXXXXXXXXXXX
