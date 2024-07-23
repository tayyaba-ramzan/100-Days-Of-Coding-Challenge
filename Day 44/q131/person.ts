export class Person{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    greet(){
        console.log(`Hello My name is ${this.name}`);
        
    }
}