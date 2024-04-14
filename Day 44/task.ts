// 🚀 Day 44 Challenge: Start Coding! 🚀

// Question 130: Explain how to export a function from one JavaScript file and import it into another file.

import { add } from "./mathFunction";
console.log(add(7, 7));

//                         XXXXXXXXXXXXXXX

// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.

import { Person } from "./person";
const per = new Person("Tayyaba Ramzan");
per.greet();

//                         XXXXXXXXXXXXXXX

// Question 132: Discuss the difference between default and named exports in JavaScript modules.

import { utilOne, utilTwo } from "./utils";
import calculator from "./calculator";

//                         XXXXXXXXXXXXXXX