class user{
  name:string;
  age:number;
  constructor(name:string,age:number){
      this.name=name;
      this.age=age;
  }
  display():void{
      console.log(`name is ${this.name} and age is ${this.age}`);
  }
}
let user1=new user("anis",33);
user1.display();

// let student2=new user("masud",26);
// student2.display();

class student extends user{
  studentId:number;
  constructor(name:string,age:number,studentId:number){
   super(name,age);
   this.studentId=studentId
}
display(): void {
  console.log(`student name is ${this.name},age is ${this.age} and id is ${this.studentId}`);
}
  
}
let student1 = new student('anis',33,101)
student1.display()
