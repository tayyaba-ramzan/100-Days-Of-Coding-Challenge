//                 🚀 || 100 Days of Coding Challenge || 🚀

// 🚀 Day 43 Challenge: Start Coding! 🚀

// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.

const traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional Function: ", this.value);

    },
    arrowFunction: function () {
        console.log("Arrow Function: ", this.value);

    },
};
traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();

//                         XXXXXXXXXXXXXXX