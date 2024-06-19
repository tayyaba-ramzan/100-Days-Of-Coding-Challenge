//                 🚀|| 100 Days of Coding Challenge || 🚀

// 🚀 Day 10 Challenge: Start Coding! 🚀

// Question 30: Hello Admin: Greet users differently, especially 'admin'.

let userNames:string[]=["admin","userOne","userTwo","userThree"];
for (let userName of userNames){
    if (userName==="admin") {
        console.log("Hello admin, would you like to see a status report?");
        
    } else{
        console.log(`Hello ${userName}, thank you for logging in again.`);
    }
    
}

//                           XXXXXXXXXXXXXXXXXXX