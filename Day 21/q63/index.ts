//                 🚀|| 100 Days of Coding Challenge || 🚀

// 🚀 Day 21 Challenge: Start Coding! 🚀

// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

type Shape = {
    kind: "Circle" | "Rectangle";
    radius?: number;
    width?: number;
    height?: number;
}
let circle: Shape = {
    kind: "Circle",
    radius: 6
}
let rectangle: Shape = {
    kind: "Rectangle",
    width: 10,
    height: 20
}
console.log(circle);
console.log(rectangle);

//                               XXXXXXXXXXXXXXXX