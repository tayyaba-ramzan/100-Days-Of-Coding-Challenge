//                 🚀 || 100 Days of Coding Challenge || 🚀

// 🚀 Day 37 Challenge: Start Coding! 🚀

// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

function studentScore(score: number): any {
    if (score >= 80) {
        return "A One Grade";
    }
    else if (score < 80 && score >= 70) {
        return "A Grade";
    }
    else if (score < 70 && score >= 60) {
        return "B Grade";
    }
    else if (score < 60 && score >= 50) {
        return "C Grade";
    }
    else if (score < 50 && score >= 40) {
        return "D Grade";
    }
    else {
        console.log("Failled");

    }
}

console.log(studentScore(40));

//                         XXXXXXXXXXXXXXX