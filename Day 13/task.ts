// 🚀 Day 13 Challenge: Start Coding! 🚀

// Question 37: Large Shirts: Default values in make_shirt().

function make_shirt(size:string="Large",message:string="I Love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
    
}

//                         XXXXXXXXXXXXXXX

// Question 38: Cities: Describing cities with a function.

function describe_city(city:string,country:string="Pakistan") {
    console.log(`${city} is in ${country}`)
}
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Tokyo","Japan");

//                         XXXXXXXXXXXXXXX

// Question 39: City Names: Formatting city-country pairs.

function city_country(city:string,country:string):string {
    return (`${city}, ${country}`)
}
console.log(city_country("Lahore","Pakistan"));
console.log(city_country("Tokyo","Japan"));
console.log(city_country("Paris","France"));

//                         XXXXXXXXXXXXXXX