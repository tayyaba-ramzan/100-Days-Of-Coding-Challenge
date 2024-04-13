// 🚀 Day 42 Challenge: Start Coding! 🚀

// Question 124: Create a function inside an object that returns the object's own name property using the this keyword.

const person={
  myName:"Tayyaba Ramzan",
  getName: function() {
    return this.myName;
  },
  
};
console.log(person.getName());

//                              XXXXXXXXXXXXXXXX

// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.

const rectangle={
  length:10,
  width:15,
  calculateArea: function(){
    return this.length*this.width;
  },
};
console.log(rectangle.calculateArea());

//                               XXXXXXXXXXXXXXXX

// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.

const myObject = {
  property: "Value",
  outerMethod: function () {
    console.log(this.property); 

    const innerMethod = () => {
      console.log(this.property); 
    };

    innerMethod();
  },
};

myObject.outerMethod();

//                               XXXXXXXXXXXXXXXX