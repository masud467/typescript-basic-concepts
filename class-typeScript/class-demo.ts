class student{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    display(){
        console.log(`name is ${this.name} and age is ${this.age}`);
    }
}
let student1=new student("anis",33);
student1.display();

let student2=new student("masud",26);
student2.display();