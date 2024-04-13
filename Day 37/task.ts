// 🚀 Day 37 Challenge: Start Coding! 🚀

// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.

const currentTime = new Date();
if (currentTime.getHours() < 12) {
  console.log("Good Morning"); 
}

//                         XXXXXXXXXXXXXXX

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

// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

function categorizeAge(age: number): string {
    if (age < 13) {
        return "child";
    } else if (age <= 19) {
        return "teenager";
    } else {
        return "adult";
    }
}

console.log(categorizeAge(19));

//                         XXXXXXXXXXXXXXX