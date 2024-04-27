//                 🚀|| 100 Days of Coding Challenge || 🚀

// 🚀 Day 48 Challenge: Start Coding! 🚀 

// Question 142: Create a promise that resolves with "Hello, world!" after 2 seconds.

let helloPromise=new Promise<string>((resolve) => {
    setTimeout(()=>{
        resolve("Hello World!");
        
    },2000)
})
helloPromise.then((message)=>console.log(message));

//                              XXXXXXXXXXXXXXXX

// Question 143: Show how to use the .then() and .cath() methods to handle Promise resolution and rejection.

let conditionalPromise=new Promise<string>((resolve, reject) => {
    const success=Math.random()-0.5;
    if (success) {
        resolve("You are successed");
    } else {
        reject(new Error("Failled"));
    }
})
conditionalPromise
.then((res)=>console.log(res))
.catch((error)=>console.log(error.message));

//                               XXXXXXXXXXXXXXXX

// Question 144: Explain the use of the Promise.all() methods with an example.

const promise1=Promise.resolve(3);
const promise2=40;
const promise3=new Promise<string>((resolve) => {
    setTimeout(resolve,100,"foo")
    
})
Promise.all([promise1,promise2,promise3]).then((values=>{
    console.log(values);
    
}))

//                               XXXXXXXXXXXXXXXX