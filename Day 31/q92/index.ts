//                 🚀 || 100 Days of Coding Challenge || 🚀

// 🚀 Day 31 Challenge: Start Coding! 🚀

// Question 92: Write a function to remove the last element from an array and return the removed element.

function removeLastElement<T>(arr:T[]):T|undefined {
    return arr.pop();
}
const fruits:string[]=["Grapes","Apple","Banana"];
console.log(removeLastElement(fruits));
console.log(fruits);


//                         XXXXXXXXXXXXXXX