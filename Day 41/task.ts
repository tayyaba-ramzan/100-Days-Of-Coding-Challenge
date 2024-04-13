// 🚀 Day 41 Challenge: Start Coding! 🚀

// Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);

}

//                         XXXXXXXXXXXXXXX

// Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.

let j = 10;
while (j > 0) {
  console.log(j);
  j--;
}

//                         XXXXXXXXXXXXXXX

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