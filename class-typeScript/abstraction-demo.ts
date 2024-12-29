abstract class user{
  name:string;
  age:number;
  constructor(name:string,age:number){
      this.name=name;
      this.age=age;
  }
  abstract display():void
}

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
