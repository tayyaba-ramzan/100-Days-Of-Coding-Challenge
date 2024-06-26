//                 🚀|| 100 Days of Coding Challenge || 🚀

// 🚀 Day 20 Challenge: Start Coding! 🚀

// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.

function averageScore(...scores: number[]): number {
    let total = scores.reduce((sum, score) => sum + score, 0); return total / scores.length

}
console.log(averageScore(40, 60, 60, 91));

//                         XXXXXXXXXXXXXXX