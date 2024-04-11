// 🚀 Day 25 Challenge: Start Coding! 🚀

// Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.

function updateVariable() {
    let number: number = 10;
    console.log("Initial Value:", number);
    number = 11;
    console.log("Update Value", number);

}
updateVariable();

//                              XXXXXXXXXXXXXXXX

// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

function swapValue() {


    let a = 5;
    let b = 10;
    console.log("Before swap: a =", a, "b =", b);
    let temp = a;
    a = b;
    b = temp;
    console.log("After swap: a =", a, "b =", b);
}
swapValue()

//                               XXXXXXXXXXXXXXXX

// Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.

let a=4;
a+=4;
console.log(a);

let b=10;
b-=5;
console.log(b);

let x=20;
x*=2;
console.log(x);

let y=16;
y/=8;
console.log(y);

//                               XXXXXXXXXXXXXXXX