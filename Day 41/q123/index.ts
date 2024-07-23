//                 🚀 || 100 Days of Coding Challenge || 🚀

// 🚀 Day 41 Challenge: Start Coding! 🚀

// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel. 

function logUntilVowel(str: string): void {
    const vowels = "aeiouAEIOU";
    for (const char of str) {
        if (vowels.includes(char)) {
            console.log(`First vowel found: ${char}`);
            break;
        }
        console.log(char); // Logs each character until a vowel is encountered
    }
}
logUntilVowel("Tayyaba");
logUntilVowel("syzygy");

//                         XXXXXXXXXXXXXXX