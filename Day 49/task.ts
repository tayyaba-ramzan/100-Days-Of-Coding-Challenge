//                 🚀|| 100 Days of Coding Challenge || 🚀

// 🚀 Day 49 Challenge: Start Coding! 🚀 

// Question 145: Create a function that accepts a callback and invokes it with some arguments. 

function executeCallback(
    callback: (num1: number, num2: number) => void,
    num1: number,
    num2: number
): void {
    callback(num1, num2);
}
const add = (x: number, y: number) => {
    console.log(x + y);

}
executeCallback(add, 7, 7)
//                              XXXXXXXXXXXXXXXX

// Question 146: Show an example of a callback function used to filter an array of numbers.

const numbers: number[] = [1, 5, 7, 3, 8, 10, 20, 30, 40, 50];
const filteredNumbers: number[] = numbers.filter(numbers => numbers >= 10);
console.log(filteredNumbers);

//                               XXXXXXXXXXXXXXXX

// Question 147: Explain how to handle errors in a callback pattern.

function fetchData(
    callback: (error: Error | null, data?: string) => void
): void {
    const error = new Error("Failled to fetch Data.");
    const data = ("Some Data")
    if (Math.random() > 0.5) {
        callback(null, data)
    } else {
        callback(error)

    }
}
fetchData((error, data) => {
    if (error) {
        console.error(error.message);
    } else {
        console.log(data);
    }
});

//                               XXXXXXXXXXXXXXXX