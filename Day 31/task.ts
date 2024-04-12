// 🚀 Day 31 Challenge: Start Coding! 🚀

// Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.

let favoriteFruits:string[]=["Grapes","Apple","Banana"];
favoriteFruits.push("Mango");
console.log(favoriteFruits);

//                              XXXXXXXXXXXXXXXX

// Question 92: Write a function to remove the last element from an array and return the removed element.

function removeLastElement<T>(arr:T[]):T|undefined {
    return arr.pop();
}
const fruits:string[]=["Grapes","Apple","Banana"];
console.log(removeLastElement(fruits));
console.log(fruits);

//                               XXXXXXXXXXXXXXXX

// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

function replaceBananaWithMango(favoriteFruit:string[]):void {
    const index=favoriteFruit.indexOf("Banana");
    if (index !== -1) favoriteFruit[index] = "Mango";
}
const favoriteFruit:string[]=["Grapes","Apple","Banana"];
replaceBananaWithMango(favoriteFruit);
console.log(favoriteFruit);

//                               XXXXXXXXXXXXXXXX