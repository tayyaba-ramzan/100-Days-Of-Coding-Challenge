//                 🚀|| 100 Days of Coding Challenge || 🚀

// 🚀 Day 18 Challenge: Start Coding! 🚀

// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

let developerSkills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "MongoDB", "MVC"],
    tools: ["Git", "Webpack", "Docker"]
};

let { languages, frameworks, tools } = developerSkills;

console.log(`Language: ${languages[1]}, Framework: ${frameworks[1]}, Tool: ${tools[0]}`);

//                         XXXXXXXXXXXXXXX